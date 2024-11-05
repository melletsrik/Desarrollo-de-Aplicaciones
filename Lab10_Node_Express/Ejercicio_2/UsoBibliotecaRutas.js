
var express = require('express');
var app = express();


var bibliotecaRutas = require('./bibliotecaRutas.js');
app.use('/', bibliotecaRutas);


app.listen(3001, function() {
    console.log('La aplicación está funcionando en el puerto 3001');
  });
  
