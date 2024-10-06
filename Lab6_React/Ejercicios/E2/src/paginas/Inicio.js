import React from 'react';
import '../estilos/Inicio.css';
import bannerEleceed from '../imagenes/banner.png';
import { useState } from 'react';
import Contador from '../componentes/Contador';
import Boton from '../componentes/Boton';

const Inicio = () => {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }


  return (
    <div className="inicio">
      <div className="bannerContenedor">
        <img aria-activedescendant=''
          className="banner"
          src={bannerEleceed}
          alt="Banner Eleceed"
        />
        <div className="sobreposicion">
          <h1 className="tituloBanner">Eleceed: Velocidad eléctrica</h1>
          <h2 className="autores">Jeho Son, ZHENA</h2>
        </div>
      </div>
      <div className="descripcion">
        <p>
          Jiwoo es un joven amable que utiliza sus reflejos increíblemente rápidos, como los de un gato, 
          para hacer del mundo un mejor lugar salvando niños o mascotas. 
          Kayden es un agente secreto prófugo que termina encerrado en el cuerpo de un... mmm... gato gordo, peludo y viejo. 
          Juntos y con la ayuda de los superpoderes de Jiwoo y la inteligencia de Kayden, 
          lucharán contra las fuerzas que desean que el mal tome control del mundo. 
          Aunque solo lo lograrán si consiguen soportarse lo suficiente para hacerlo.
        </p>
      </div>
      <div className='contenedorBotones'>
        <Contador numClics={numClics} />
        <Boton 
          texto='Kudo <3'
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
};

export default Inicio;
