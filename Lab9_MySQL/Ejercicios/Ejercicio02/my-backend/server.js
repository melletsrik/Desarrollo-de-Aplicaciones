/* const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');
app.use(cors());
const app = express();
const port = 3001;

// Configuración de PostgreSQL
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

app.use(bodyParser.json());

// Ruta para insertar datos cifrados en PostgreSQL
app.post('/insertar-cliente', async (req, res) => {
  const data = {
    nombre: "Juan Perez",
    tarjeta_credito: "4111-1111-1111-1111",
    correo_electronico: "juan.perez@correo.com",
    telefono: "5551234567"
  };

  try {
    const response = await fetch('http://localhost:3001/insertar-cliente', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Error en la respuesta del servidor');
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error('Error al enviar los datos:', error);
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
}); */
const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const path = require('path');
const mysql = require('mysql2');

const app = express();
const port = 3001;

// Database connection
const db = mysql.createConnection({
  host: 'localhost', // Update with your database host
  user: 'usuario', // Update with your database username
  password: 'usuario', // Update with your database password
  database: 'gestion_archivos' // Update with your database name
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database');
});

app.use(cors());
app.use(fileUpload());
app.use(express.json());

// Upload endpoint
app.post('/upload', (req, res) => {
  const file = req.files.file;
  const specialtyId = req.body.specialty; // assuming specialty is sent as an ID

  // Construct the upload path
  const uploadPath = path.join(
    'C:\\Users\\Rodrigo\\Desktop\\codigos_pruebas\\nuevoproyecto\\my-backend\\uploads',
    specialtyId
  );

  if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
  }

  // Full path for saving the file
  const filePath = path.join(uploadPath, file.name);

  file.mv(filePath, (err) => {
    if (err) return res.status(500).send(err);

    // Insert file metadata into the database
    const query = `INSERT INTO archivo (nombre_archivo, ruta_archivo, fecha_subida, especialidad_id)
                   VALUES (?, ?, NOW(), ?)`;
    const values = [file.name, filePath, specialtyId];

    db.query(query, values, (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ message: 'Archivo subido exitosamente' });
    });
  });
});

// Get files endpoint
app.get('/files', (req, res) => {
  const query = `
    SELECT archivo.nombre_archivo, archivo.ruta_archivo, archivo.fecha_subida, especialidad.nombre AS especialidad_nombre
    FROM archivo
    INNER JOIN especialidad ON archivo.especialidad_id = especialidad.id
  `;
  
  db.query(query, (err, results) => {
    if (err) return res.status(500).send(err);

    // Organize files by specialty name
    const filesBySpecialty = results.reduce((acc, file) => {
      const specialtyName = file.especialidad_nombre;
      if (!acc[specialtyName]) {
        acc[specialtyName] = [];
      }
      acc[specialtyName].push({
        nombre_archivo: file.nombre_archivo,
        ruta_archivo: file.ruta_archivo,
        fecha_subida: file.fecha_subida,
      });
      return acc;
    }, {});

    res.json(filesBySpecialty);
  });
});

// Get specific file content endpoint
app.get('/files/:specialty/:fileName', (req, res) => {
  const { specialty, fileName } = req.params;
  const query = `
    SELECT ruta_archivo 
    FROM archivo 
    WHERE nombre_archivo = ? AND especialidad_id = (SELECT id FROM especialidad WHERE nombre = ?)
  `;
  const values = [fileName, specialty];

  db.query(query, values, (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length === 0) return res.status(404).send('Archivo no encontrado');

    const filePath = results[0].ruta_archivo;
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) return res.status(404).send('Archivo no encontrado');
      res.json({ content: data });
    });
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});