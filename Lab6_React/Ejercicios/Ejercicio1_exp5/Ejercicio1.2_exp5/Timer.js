
import { useState, useEffect } from 'react';
import './Timer.css'; 

const Timer = () => {
  const [tiempo, setTiempo] = useState(10); 
  const [mensaje, setMensaje] = useState(''); 

 
  useEffect(() => {
    let interval = null; 
    if (tiempo > 0) {
      interval = setInterval(() => {
        setTiempo((prev) => prev - 1); 
      }, 1000);
    } else if (tiempo === 0) {
      setMensaje("¡Tiempo agotado!"); 
    }

    
    return () => clearInterval(interval);
  }, [tiempo]);

  return (
    <div className="timer-container">
      <h2>Tiempo restante: {tiempo} segundos</h2>
      {/* Mostrar mensaje cuando el tiempo se agota */}
      {mensaje && <h3>{mensaje}</h3>}
    </div>
  );
};

export default Timer;
