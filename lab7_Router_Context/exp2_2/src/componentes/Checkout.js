import React, { useState } from 'react';
import { usePedido } from '../contexto/PedidoContext';
import '../estilos/Checkout.css';

const Checkout = () => {
  const { establecerMetodoPago, pedido } = usePedido();
  const [metodoPago, setMetodoPago] = useState('');

  const manejarCambioMetodoPago = (event) => {
    setMetodoPago(event.target.value);
  };

  const manejarEnviar = () => {
    establecerMetodoPago(metodoPago);
    alert('Método de pago seleccionado: ' + metodoPago);
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <h3>Total: ${pedido.total}</h3>
      <label>
        Método de pago:
        <select value={metodoPago} onChange={manejarCambioMetodoPago}>
          <option value="">Selecciona...</option>
          <option value="Tarjeta de Crédito">Tarjeta de Crédito</option>
          <option value="PayPal">PayPal</option>
        </select>
      </label>
      <button onClick={manejarEnviar}>Enviar Pago</button>
    </div>
  );
};

export default Checkout;
