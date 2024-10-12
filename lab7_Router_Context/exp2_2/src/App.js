import React, { useState } from 'react';
import { PedidoProvider } from './contexto/PedidoContext';
import Menu from './componentes/Menu';
import ResumenPedido from './componentes/ResumenPedido';
import Checkout from './componentes/Checkout';
import Confirmacion from './componentes/Confirmacion';

const App = () => {
  const [pestañaActual, setPestañaActual] = useState('menu');

  const renderizarPestaña = () => {
    switch (pestañaActual) {
      case 'menu':
        return <Menu />;
      case 'resumen':
        return <ResumenPedido />;
      case 'checkout':
        return <Checkout />;
      case 'confirmacion':
        return <Confirmacion />;
      default:
        return <Menu />;
    }
  };

  return (
    <PedidoProvider>
      <div className="app">
        <div className="pestanas">
          <button onClick={() => setPestañaActual('menu')}>Menú</button>
          <button onClick={() => setPestañaActual('resumen')}>Resumen del Pedido</button>
          <button onClick={() => setPestañaActual('checkout')}>Checkout</button>
          <button onClick={() => setPestañaActual('confirmacion')}>Confirmación</button>
        </div>
        {renderizarPestaña()}
      </div>
    </PedidoProvider>
  );
};

export default App;
