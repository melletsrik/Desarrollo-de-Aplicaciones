/*Primera version
// Importar el módulo http
const http = require('http');

// Crear un servidor
const servidor = http.createServer((request, response) => {
  // Establecer el código de estado de la respuesta
  response.statusCode = 200;
  
  // Establecer el tipo de contenido de la respuesta
  response.setHeader('Content-Type', 'text/plain');
  
  // Enviar la respuesta
  response.end('¡Hola Mundo desde mi servidor Node.js!');
});

// Hacer que el servidor escuche en el puerto 3000
const puerto = 3000;
servidor.listen(puerto, () => {
  console.log(`El servidor está escuchando en el puerto ${puerto}`);
});

*/

// Importar el módulo http
const http = require('http');

// Crear un servidor
const servidor = http.createServer((request, response) => {
  // Mostrar información sobre la solicitud en la consola del servidor
  console.log("Información de la solicitud:");
  console.log(`URL: ${request.url}`);
  console.log(`Método: ${request.method}`);
  console.log(`Cabeceras:`, request.headers);

  // Establecer el código de estado de la respuesta
  response.statusCode = 200;

  // Establecer el tipo de contenido de la respuesta
  response.setHeader('Content-Type', 'text/plain');

  // Enviar la respuesta
  response.end('¡Hola Mundo desde mi servidor Node.js!');

  // Mostrar información sobre la respuesta en la consola del servidor
  console.log("\nInformación de la respuesta:");
  console.log(`Código de estado: ${response.statusCode}`);
  console.log(`Cabeceras:`, response.headers);
});

// Cambia el puerto 3000 a 3001
const puerto = 3001;
servidor.listen(puerto, () => {
  console.log(`El servidor está escuchando en el puerto ${puerto}`);
});
