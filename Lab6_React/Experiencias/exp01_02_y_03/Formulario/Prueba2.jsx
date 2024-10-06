import React, { useState } from "react";
import './Prueba2.css';

export default function Formulario(props) {
    const [nombre, setNombre] = useState(props.nombre || '');
    const [correo, setCorreo] = useState(props.correo || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Nombre: ${nombre}, Correo: ${correo}`);
    };

    const handleClear = () => {
        setNombre('');
        setCorreo('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input 
                type="text" 
                value={nombre} 
                onChange={(e) => setNombre(e.target.value)}
            />
            <br />
            <label>Correo</label>
            <input 
                type="text" 
                value={correo} 
                onChange={(e) => setCorreo(e.target.value)}
            />
            <br />
            <button type="submit">Siguiente</button>
            <button type="button" onClick={handleClear}>Limpiar</button>
        </form>
    );
}