const express = require("express");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const { db, bucket } = require("./firebase-config");

const app = express();
app.use(bodyParser.json());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// Ruta para obtener todos los documentos de una colección
app.get("/api/:collection", async (req, res) => {
  const { collection } = req.params;
  try {
    const snapshot = await db.collection(collection).get();
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para añadir un documento a una colección
app.post("/api/:collection", async (req, res) => {
  const { collection } = req.params;
  const newData = req.body;
  try {
    const docRef = await db.collection(collection).add(newData);
    res.status(201).json({ id: docRef.id, message: "Documento creado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para subir un archivo al Storage
app.post("/api/upload", async (req, res) => {
  if (!req.files || !req.files.file) {
    return res.status(400).json({ error: "No se ha subido ningún archivo" });
  }

  const file = req.files.file;
  const destination = `uploads/${file.name}`;

  try {
    await bucket.upload(file.tempFilePath, {
      destination,
    });
    const fileURL = `https://storage.googleapis.com/${bucket.name}/${destination}`;
    res.status(200).json({ message: "Archivo subido", url: fileURL });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
