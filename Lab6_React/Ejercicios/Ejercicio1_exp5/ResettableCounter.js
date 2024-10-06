// src/componentes/ResettableCounter.js  
import { useState, useEffect } from "react";  
import './ResettableCounter.css'; 

const ResettableCounter = () => {  
    const [contador, setContador] = useState(0); 

    
    useEffect(() => {  
        document.title = `Contador: ${contador}`;  
    }, [contador]);  

     
    const incrementar = () => setContador(prev => prev + 1);  
    
    
    const resetear = () => setContador(0);  

    return (  
        <div className="counter-container">  
            <h2>Contador: {contador}</h2> {/* Muestra el valor del contador */}  
            <button onClick={incrementar}>  
                <i className="fas fa-plus"></i> Incrementar  
            </button> {/* Botón para incrementar */}  
            <button onClick={resetear}>  
                <i className="fas fa-undo"></i> Resetear  
            </button> {/* Botón para resetear */}  
        </div>  
    );  
};  

export default ResettableCounter;