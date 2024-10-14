import React, { useContext, useState } from "react";
import './listanimal.css'
import pippenimg from '../assets/images/pippin.PNG'
import rodmanimg from '../assets/images/rodman.PNG'
import jordanimg from '../assets/images/mj.PNG'
import { UserContext } from "../contexts/UserProvider";
import Juego1 from "./juego1";

export function Listaanima(){

    const animales = [
      { id: 1, nombre: "Scottie Pippen", posicion: "Alero", equipo: "Chicago Bulls", img: pippenimg },
      { id: 2, nombre: "Dennis Rodman", posicion: "Ala-pívot", equipo: "Chicago Bulls", img: rodmanimg },
      { id: 3, nombre: "Michael Jordan", posicion: "Escolta", equipo: "Chicago Bulls", img: jordanimg },
];
  const [escogido, setEscogido] = useContext(UserContext);
  const [juegoVisible, setJuegoVisible] = useState(false);
  const handleonClick = (escogido1) => {
    console.log(escogido);
    setEscogido(escogido1);
    if (!juegoVisible) {
      setJuegoVisible(true); 
    }
  }
    return(
        <div className="container">
          {juegoVisible && <Juego1 />}
        <div className="row">
          {animales.map((animal) => (
            
            <div className="col-md-4" key={animal.id}>
              <div className="card" style={{ width: '18rem' }}>
                <img
                  class="card-img-top img-fluid img-scale"
                  src={animal.img}
                  alt={animal.nombre}

                />
                <div className="card-body">
                  <h5 className="card-title">{animal.nombre}</h5>
                  <p className="card-text">
                    <strong>Posición:</strong> {animal.posicion}<br />
                    <strong>Equipo:</strong> {animal.equipo}
                  </p>
                  <button onClick={() => handleonClick(animal.nombre)} >Vota por {animal.nombre}</button>
                </div>
              </div>
            </div>
            
          ))}
        </div>
      </div>
      
    )  
    
}