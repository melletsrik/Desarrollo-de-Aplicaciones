var express = require('express');
var app = express();
var mysql = require('mysql2');  // Usar mysql2 en lugar de mysql

var bodyParser = require('body-parser');  // Corregido "requiere" por "require"

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'barbershop',
    user: 'root',
    password: 'root',
});

connection.connect(function (err) {
    if (err) throw err;
    console.log('Conectado a la base de datos');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Corrección en la llamada de 'listen' y 'console.log' para mostrar puerto y host
var server = app.listen(3000, '127.0.0.1', function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Servidor corriendo en http://%s:%s', host, port);
});

// API para obtener todos los libros (books)
app.get('/books', function (req, res) {  
    connection.query('SELECT * FROM books', function (error, results) {
        if (error) throw error;
        res.json(results);  
    });
});

app.get('/books/:id',function(req,res){
    connection.query('select *from books where id=?',[req.params.id],function(error,results){
        if(error)throw error;
        res.end(JSON.stringify(results))
    });
});

