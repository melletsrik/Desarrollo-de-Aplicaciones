const express = require('express');  
const app = express();  
const cors = require('cors');  
app.use(cors());  

app.listen('3000', () => {  
  console.log("Servidor e ejecucción");  
});  

const bookRouter = require('./routes/books');  
app.use('/api', bookRouter);