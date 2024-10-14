import React,{ useContext } from "react"
import  Btn  from "./Btn"
import { UserContext } from "../UserProvider"
export default function Nav(){
    
    const [nombre, setNombre] =  useContext(UserContext);
    const handleonClick = () =>{
        setNombre("Henry");
    }
    return(
        <div>
            <nav>
                <h2>LOASAGO</h2>
                <ul>
                    <li> HOLA {nombre}</li>
                    <button onClick={handleonClick}>WAOS</button>
                </ul>
            </nav>
        </div>
    )
}