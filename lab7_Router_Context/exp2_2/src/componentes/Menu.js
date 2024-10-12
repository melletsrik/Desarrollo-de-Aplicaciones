import React from 'react';
import { usePedido } from '../contexto/PedidoContext';
import '../estilos/Menu.css';

const platosDisponibles = [
    { id: 1, nombre: 'Ceviche', precio: 15.00 },
    { id: 2, nombre: 'Lomo Saltado', precio: 12.00 },
    { id: 3, nombre: 'Aji de Gallina', precio: 10.50 },
    { id: 4, nombre: 'Pollo a la Brasa', precio: 14.00 },
    { id: 5, nombre: 'Pachamanca', precio: 18.00 },
    { id: 6, nombre: 'Causa Rellena', precio: 9.50 },
    { id: 8, nombre: 'Arroz con Mariscos', precio: 13.00 },
    { id: 9, nombre: 'Sanguchito de Chicharrón', precio: 7.50 },
    { id: 10, nombre: 'Suspiro a la Limeña', precio: 5.50 },
  ];
  

const Menu = () => {
  const { agregarPlato } = usePedido();

  const manejarAgregarPlato = (plato) => {
    agregarPlato(plato);
  };

  return (
    <div className="menu">
      <h2>Selecciona tus platos</h2>
      <ul>
        {platosDisponibles.map(plato => (
          <li key={plato.id}>
            <span>{plato.nombre} - ${plato.precio}</span>
            <button onClick={() => manejarAgregarPlato(plato)}>Añadir al pedido</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
