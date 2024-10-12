/* Context: es una manera de almacenar cualquier tipo de datos 
   y que sea accesible para los componentes sin importar donde están en la aplicación 
   sin tener que pasar la data por props.
*/
import React, { createContext, useState, useContext } from 'react';

const PedidoContext = createContext();

export const PedidoProvider = ({ children }) => {

  const [pedido, setPedido] = useState({
    platos: [],
    total: 0,
    metodoPago: '',
  });

  const agregarPlato = (plato) => {
    setPedido(prevPedido => {
      const platosActualizados = [...prevPedido.platos, plato];
      const totalActualizado = platosActualizados.reduce((acc, curr) => acc + curr.precio, 0);
      return {
        platos: platosActualizados,
        total: totalActualizado,
        metodoPago: prevPedido.metodoPago
      };
    });
  };

  const establecerMetodoPago = (metodo) => {
    setPedido(prevPedido => {
      return {
        platos: prevPedido.platos,
        total: prevPedido.total,
        metodoPago: metodo
      };
    });
  };

  return (
    <PedidoContext.Provider value={{ pedido, agregarPlato, establecerMetodoPago }}>
      {children}
    </PedidoContext.Provider>
  );
};

// hook para usar el contexto en los componentes
export const usePedido = () => useContext(PedidoContext);
