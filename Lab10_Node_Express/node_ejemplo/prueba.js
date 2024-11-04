
const mysql = require('mysql');
const crypto = require('crypto');
const http = require('http');
const fs = require('fs');
const path = require('path');
const querystring = require('querystring');


const conexion = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  database: 'prueba',
  user: 'usuario1',
  password: 'usuario1',
});

// Connect to MySQL
conexion.connect(function (err) {
  if (err) {
    console.log('Error de conexión: ' + err.stack);
    return;
  }
  console.log('Conectado a MySQL con ID ' + conexion.threadId);
});

const algorithm = 'aes-256-cbc';
const key = crypto.scryptSync('your-secret-key', 'salt', 32); 
const iv = Buffer.alloc(16, 0); 

function encrypt(text) {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

const sampleData = [
  { email: 'user1@example.com', password: 'password123' },
  { email: 'user2@example.com', password: 'mypassword' },
  { email: 'user3@example.com', password: 'secretpass' },
];

sampleData.forEach(({ email, password }) => {
  const encryptedEmail = encrypt(email);
  const encryptedPassword = encrypt(password);
  
  conexion.query(
    'INSERT INTO users (email, password) VALUES (?, ?)',
    [encryptedEmail, encryptedPassword],
    (error, results) => {
      if (error) throw error;
      console.log('Data inserted successfully:', results);
    }
  );
});

const sendHtml = (res, filepath) => {
  fs.readFile(filepath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
};

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/') {
      sendHtml(res, path.join(__dirname, 'public', 'form.html'));
    } else if (req.url === '/users') {
      conexion.query('SELECT * FROM users', (err, results) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Database query error');
          return;
        }
        let userListHtml = results
          .map(user => `<li><strong>Email:</strong> ${user.email} | <strong>Password:</strong> ${user.password}</li>`)
          .join('');
        let htmlContent = `
          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <title>Lista de usuarios</title>
          </head>
          <body>
              <h1>Usuarios registrados</h1>
              <ul>${userListHtml}</ul>
              <a href="/">Agrega otro usuario ^^</a>
          </body>
          </html>
        `;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(htmlContent);
      });
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    }
  } else if (req.method === 'POST' && req.url === '/adduser') {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
    });
    req.on('end', () => {
      const postData = querystring.parse(body);
      const encryptedEmail = encrypt(postData.email);
      const encryptedPassword = encrypt(postData.password);

      conexion.query('INSERT INTO users (email, password) VALUES (?, ?)', [encryptedEmail, encryptedPassword], (error, results) => {
        if (error) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Error inserting data');
          return;
        }
        res.writeHead(302, { Location: '/users' });
        res.end();
      });
    });
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/users`);
});

process.on('SIGINT', () => {
  conexion.end(err => {
    if (err) {
      console.error('Error closing the database connection:', err);
    } else {
      console.log('Database connection closed');
    }
    process.exit();
  });
});