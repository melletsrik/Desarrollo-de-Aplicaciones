import React from 'react';
import { usePedido } from '../contexto/PedidoContext';
import '../estilos/Confirmacion.css';

const Confirmacion = () => {
  const { pedido } = usePedido();

  return (
    <div className="confirmacion">
      <h2>Confirmación del Pedido</h2>
      <p>¡Gracias por tu pedido! Tu pedido ha sido confirmado.</p>
      <h3>Detalles del Pedido:</h3>
      <ul>
        {pedido.platos.map((plato, index) => (
          <li key={index}>{plato.nombre} - ${plato.precio}</li>
        ))}
      </ul>
      <h3>Total: ${pedido.total}</h3>
      <p>Método de pago: {pedido.metodoPago}</p>
    </div>
  );
};

export default Confirmacion;
