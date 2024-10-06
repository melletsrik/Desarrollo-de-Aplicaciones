import React from 'react';
import './App.css';
import Timer from './componente/Timer'; 


function App() {
    return (
        <div className="app-container">
            <h1>Aplicación de Contador y Temporizador</h1>
            <Timer /> {/* Incorporar el componente temporizador */}
        </div>
    );
}

export default App;
