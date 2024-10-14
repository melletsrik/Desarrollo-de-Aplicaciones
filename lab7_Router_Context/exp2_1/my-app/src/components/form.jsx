import { useContext, useEffect, useState } from "react"
import './form.css'
import { NombreCard } from "./NombreCard";
import { UserContext } from "../contexts/UserProvider";
import { Alerta } from "./alerta";
export function Formulario(){
    const[escogido, setEscogido] = useContext(UserContext);    
    const[nombre, setNombre] = useState('');    
    const handleSubmit = (e) => {
        e.preventDefault();          
        console.log(e);
      }    
    return(
        <div class="alert alert-secondary">
            <h1>{escogido}</h1>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Deja una reseña "
                value={nombre}
                onChange={(e) => setNombre(e.target.value)} 
                />
                
            <button type="submit" class="btn btn-primary">enviar</button>
            </form>
        </div>
    );
}
