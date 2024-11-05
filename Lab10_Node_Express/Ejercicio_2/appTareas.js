
var express = require('express');
var app = express();


var rutasTareas = require('./tareas.js');
app.use('/', rutasTareas);


app.listen(3001, function() {
  console.log('La aplicación de gestión de tareas está funcionando en el puerto 3001');
});
