import React, {useContext} from "react";
import { UserContext } from "../UserProvider";

export default function Oco(){
    const [nombre, setNombre] =  useContext(UserContext);
    const handleonClick = () =>{
        setNombre("apu se va de los simpsons");
    }
    return (
        <div>
            <h1> LOCO {nombre}</h1>
            <button onClick={handleonClick}> apu </button>
        </div>
    )
}