import { useEffect, useState } from "react"
import './form.css'
import { NombreCard } from "./NombreCard";
export function Formulario(){

    const[nombre, setNombre] = useState('');
    
    useEffect(()=> {

        console.log("elpepe");
    }, []) ;


    
    const handleSubmit = (e) => {
        e.preventDefault();  
 
        console.log(e);
      }
    
    return(
        <div class="alert alert-secondary">
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Escribe tu animal favorito"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)} 
                />
                
            <button type="submit" class="btn btn-primary">Siguiente</button>
            </form>
        </div>
    );
}
