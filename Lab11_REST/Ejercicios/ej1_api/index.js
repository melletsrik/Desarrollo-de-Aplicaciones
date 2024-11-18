const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const app = express();
app.use(bodyParser.json()); // Middleware para parsear JSON

// Server
const PORT = 3000;
app.listen(PORT, () => {
   console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// Clave secreta para JWT
const SECRET_KEY = "secret-key-mel";

//PRIMER ENDPOINT
// para generar un token - autenticacion
app.post("/login", (req, res) => {
   const { username, password } = req.body;

  // Validación ficticia de usuario
   if (username === "melissa" && password === "7melissa7") {
      const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
      return res.json({ token });
   }

   res.status(401).json({ error: "Credenciales inválidas" });
   });

   // Middleware para verificar JWT
   const verificarToken = (req, res, next) => {
   const token = req.headers["authorization"];

   if (!token) {
      return res.status(403).json({ error: "Token requerido" });
   }

   try {
      req.usuario = jwt.verify(token.replace("Bearer ", ""), SECRET_KEY);
      next();
   } catch {
      res.status(401).json({ error: "Token inválido o expirado" });
   }
};

// CRUD de tareas
let tareas = [];
//SEGUNDO ENDPOINT
// GET: obtener todas las tareas
app.get("/tareas", verificarToken, (req, res) => {
  res.json(tareas);
});

// GET: obtener 1 tarea
app.get("/tareas/:id", verificarToken, (req, res) => {
   const { id } = req.params;
   const { titulo, descripcion } = req.body;

   const tarea = tareas.find((t) => t.id === parseInt(id));
   if (!tarea) {
      return res.status(404).json({ error: "Tarea no encontrada" });
   }
   res.json(tarea);
 });

// POST: agregar una nueva tarea
app.post("/tareas", verificarToken, (req, res) => {
   const { titulo, descripcion } = req.body;
   const nuevaTarea = { id: tareas.length + 1, titulo, descripcion };
   tareas.push(nuevaTarea);
   res.status(201).json(nuevaTarea);
});

// PUT: actualizar una tarea por ID
app.put("/tareas/:id", verificarToken, (req, res) => {
   const { id } = req.params;
   const { titulo, descripcion } = req.body;

   const tarea = tareas.find((t) => t.id === parseInt(id));
   if (!tarea) {
      return res.status(404).json({ error: "Tarea no encontrada" });
   }

   tarea.titulo = titulo || tarea.titulo;
   tarea.descripcion = descripcion || tarea.descripcion;
   res.json(tarea);
});

// DELETE: eliminar una tarea por ID
app.delete("/tareas/:id", verificarToken, (req, res) => {
   const { id } = req.params;
   const index = tareas.findIndex((t) => t.id === parseInt(id));

   if (index === -1) {
      return res.status(404).json({ error: "Tarea no encontrada" });
   }

   tareas.splice(index, 1);
   res.status(204).send(); // No Content
});