
var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.send('Bienvenido a la Biblioteca en Línea');
});


router.get('/login', function(req, res) {
  res.send('Por favor, inicia sesión para acceder a tu cuenta');
});


router.get('/libros', function(req, res) {
  res.send('Listado de todos los libros disponibles');
});


router.get('/libros/:id', function(req, res) {
  const libroId = req.params.id;
  res.send(`Detalles del libro con ID: ${libroId}`);
});

module.exports = router;
