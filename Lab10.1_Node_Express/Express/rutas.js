
/*const express = require('express'); 
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



// Ruta con parámetro de ruta
router.get('/cursos/:id', (req, res) => {
    const idCurso = req.params.id;
    res.send(`Estás viendo el curso con ID: ${idCurso}`);
});

module.exports = router;

// Ruta con parámetros de consulta
router.get('/cursos', (req, res) => {
    const tema = req.query.tema;
    res.send(`Estás viendo cursos sobre el tema: ${tema}`);
});

module.exports = router; */

/*const express = require('express');
const router = express.Router();

// Importar el router de cursos
const cursosRouter = require('./Routers/cursos');

// Usar el router de cursos para las rutas que comienzan con /cursos
router.use('/cursos', cursosRouter);

// Otras rutas en rutas.js
// ...

module.exports = router;

*/
const express = require('express');
const router = express.Router();

// Definir una ruta de ejemplo
router.get('/', (req, res) => {
  res.send('Página principal');
});

// Agregar o modificar rutas en rutas.js
router.get('/nuevaRuta', (req, res) => {
  res.send('Esta es una nueva ruta');
});

module.exports = router;
