import React from "react";
import './listanimal.css'
import tigreimg from '../assets/images/tigre.PNG'
import leonimg from '../assets/images/leon.PNG'
import eleimg from '../assets/images/ele.PNG'
import jirafaimg from '../assets/images/jirafa.PNG'
import cebraimg from '../assets/images/cebra.PNG'
import hipoimg from '../assets/images/hipo.PNG'
export function Listaanima(){
    const animales = [
        { id: 1, nombre: "León", especie: "Panthera leo", habitat: "Sabana", img: leonimg },
        { id: 2, nombre: "Tigre", especie: "Panthera tigris", habitat: "Selva", img: tigreimg },
        { id: 3, nombre: "Elefante", especie: "Loxodonta africana", habitat: "Sabana", img: eleimg },
        { id: 4, nombre: "Jirafa", especie: "Giraffa camelopardalis", habitat: "Sabana", img: jirafaimg },
        { id: 5, nombre: "Cebra", especie: "Equus quagga", habitat: "Praderas", img: cebraimg },
        { id: 6, nombre: "Hipopótamo", especie: "Hippopotamus amphibius", habitat: "Ríos", img: hipoimg },
];

    return(
        <div className="container">
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
                    <strong>Especie:</strong> {animal.especie}<br />
                    <strong>Habitat:</strong> {animal.habitat}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )  
    
}   