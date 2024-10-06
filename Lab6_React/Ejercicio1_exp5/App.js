// src/App.js  
import React from 'react';  
import './App.css';  

import ResettableCounter from './componentes/ResettableCounter'; // Importar el contador  

function App() {  
    return (  
        <div className="app-container">  
            <h1>Aplicación de Contador</h1> {/* Título de la aplicación */}  
            <ResettableCounter /> {/* Incorporar el componente contador */}  
        </div>  
    );  
}  

export default App;