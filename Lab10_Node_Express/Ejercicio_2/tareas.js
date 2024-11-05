// tareas.js
var express = require('express');
var router = express.Router();

// Definiendo manejadores de rutas
router.get('/tareas', function(req, res) {
  res.send('Aquí se mostrarán todas las tareas');
});

router.post('/tareas', function(req, res) {
  res.send('Tarea creada correctamente');
});

router.get('/tareas/:id', function(req, res) {
  res.send(`Viendo tarea con ID: ${req.params.id}`);
});

router.delete('/tareas/:id', function(req, res) {
  res.send(`Tarea con ID: ${req.params.id} eliminada`);
});

// Exportando el módulo de rutas
module.exports = router;
