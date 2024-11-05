var express = require('express');
var app = express();


const registroVisitas = function(req, res, next) {
  console.log(`Visita registrada: ${req.method} ${req.url} - ${new Date().toLocaleString()}`);
  next();
};


app.use(registroVisitas);


app.get('/', function(req, res) {
  res.send('Bienvenido a la Biblioteca');
});

app.get('/libros', function(req, res) {
  res.send('Aquí puedes ver todos los libros disponibles');
});

app.listen(3000, function() {
  console.log('Servidor de biblioteca en escucha en el puerto 3000');
});
