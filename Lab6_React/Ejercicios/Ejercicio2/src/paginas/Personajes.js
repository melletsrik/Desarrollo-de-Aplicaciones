import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import CartaPersonaje from '../componentes/CartaPersonaje';

const personajes = [
  { nombre: 'Jiwoo', edad: '17 años', genero: 'Masculino', poder: 'Electrokinesis (a través de Lightning Force Control)', imagen: 'JiwooSeo' },
  { nombre: 'Jisuk', edad: '18 años', genero: 'Masculino', poder: 'Aerokinesis', imagen: 'JooJisuk' },
  { nombre: 'Wooin', edad: '17 años', genero: 'Masculino', poder: 'Telekinesis', imagen: 'Wooin' },
  { nombre: 'Subin', edad: '18 años', genero: 'Femenino', poder: 'Cryokinesis', imagen: 'LeeSubin' },
  { nombre: 'Kayden', edad: '?? años', genero: 'Masculino', poder: 'Electrokinesis, Umbrakinesis y transformación en gato', imagen: 'Kayden' },
  { nombre: 'Kartein', edad: '?? años', genero: 'Masculino', poder: 'Curación y Aislamiento espacial', imagen: 'Kartein' },
  { nombre: 'Yoo Jiyoung', edad: '21 años', genero: 'Femenino', poder: 'Aerokinesis y  Aislamiento espacial', imagen: 'YooJiyoung' }
];

const Personajes = () => {
  return (
    <div className='contenedorPersonajes'>
      {personajes.map((personaje, index) => (
        <CartaPersonaje key={index} {...personaje} />
        ))}
    </div>
  );
};

export default Personajes;
