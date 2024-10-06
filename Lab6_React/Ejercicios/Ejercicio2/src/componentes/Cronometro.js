import '../estilos/Cronometro.css';
import React, { useState, useEffect } from 'react';

const Cronometro = () => {
    const [segundos, setSegundos] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setSegundos((prevSegundos) => prevSegundos + 1);
        }, 1000);

        return () => clearInterval(intervalo); // Limpiar intervalo al desmontar
    }, []);

    // Formatear el tiempo en minutos y segundos
    const formatearTiempo = (segundos) => {
        const minutos = Math.floor(segundos / 60);
        const secs = segundos % 60;
        return `${minutos}m ${secs}s`;
    };

    return (
        <div className='cronometro'>
            <p>Tiempo en la página: {formatearTiempo(segundos)}</p>
        </div>
    );
};

export default Cronometro;
