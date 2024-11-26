require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const librosRoutes = require('./routes/libros');

const app = express();
const PORT = process.env.PORT || 3000;
//el .env es para almacenar variables de configuración de una aplicación
// Middleware
app.use(bodyParser.json());

// Conexión a la base de datos
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Conexión exitosa a MongoDB'))
.catch(err => console.error('Error al conectar a MongoDB:', err));

// Rutas
app.use('/api/libros', librosRoutes);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
