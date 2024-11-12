// Importar el módulo express
const express = require('express');

// Crear una aplicación Express
const app = express();

// Definir una ruta para la página principal
app.get('/', (req, res) => {
  res.send('¡Hola Mundo desde mi servidor Express!');
});

// Cambiar el puerto a 3003
const port = 3003;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


