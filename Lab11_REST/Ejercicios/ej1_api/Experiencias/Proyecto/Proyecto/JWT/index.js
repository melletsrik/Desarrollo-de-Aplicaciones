const express = require('express');  
const jwt = require('jsonwebtoken');  
const app = express();  

app.get('/api', (req, res) => {  
    res.json({  
        mensaje: "Esta es la Data de Clientes"  
    });  
});  

app.post('/api/posts', (req, res) => {  
    res.json({  
        mensaje: "Post Creado.."  
    });  
});  

app.listen(5001, () => console.log("Servidor está ejecutándose en el puerto 5001"));


app.post('/api/login', (req, res) => {  
    const user = {  
        id: 1,  
        username: "aruiz",  
        email: "aruiz@gmail.com"  
    }  

    jwt.sign({ user }, 'secretkey', { expiresIn: '30s' }, (err, token) => {  
        res.json({  
            token  
        });  
    });  
});


app.post('/api/posts', verifiToken, (req, res) => {  
    jwt.verify(req.token, 'secretykey', (err, authData) => {  
        if (err) {  
            res.sendStatus(403);  
        } else {  
            res.json({  
                mensaje: 'Post Creado',  
                authData  
            });  
        }  
    });  
});



function verifiToken(req, res, next) {  
    const bearerHeader = req.headers['authorization'];  
    if (typeof bearerHeader !== 'undefined') {  
        const bearer = bearerHeader.split(' ');  
        const bearerToken = bearer[1];  
        req.token = bearerToken;  
        next();  
    } else {  
        res.sendStatus(403);  
    }  
}