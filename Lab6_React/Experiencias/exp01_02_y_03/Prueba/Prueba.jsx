import React from "react";
import './Prueba.css';

export default function Pruebas(props) {
    const handleClick = () => {
        alert("¡Hola! Este es un mensaje desde el componente Prueba.");
    };

    return (
        <div>
            <h1>{props.titulo}</h1>
            <button onClick={() => alert(props.mensaje)}>
                {props.textoBoton}
            </button>
            <button onClick={handleClick}>Mostrar Mensaje Prueba</button>
        </div>
    );
}