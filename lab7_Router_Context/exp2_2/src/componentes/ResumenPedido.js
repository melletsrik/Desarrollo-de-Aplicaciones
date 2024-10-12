import React from 'react';
import { usePedido } from '../contexto/PedidoContext';
import '../estilos/ResumenPedido.css';

const ResumenPedido = () => {
  const { pedido } = usePedido();

  return (
    <div className="resumen-pedido">
      <h2>Resumen del Pedido</h2>
      <ul>
        {pedido.platos.length === 0 ? (
          <li>No hay platos en el pedido</li>
        ) : (
          pedido.platos.map((plato, index) => (
            <li key={index}>{plato.nombre} - ${plato.precio}</li>
          ))
        )}
      </ul>
      <h3>Total: ${pedido.total}</h3>
    </div>
  );
};

export default ResumenPedido;
