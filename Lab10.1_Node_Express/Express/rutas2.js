const express = require('express');
const router = express.Router();

// Ruta para la página principal
router.get('/', (req, res) => {
    res.send('¡Hola desde la página principal!');
});

// Ruta para /cursos
router.get('/cursos', (req, res) => {
    res.send('¡Bienvenido a la sección de cursos!');
});

module.exports = router;
