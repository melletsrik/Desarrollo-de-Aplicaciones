import './contador.css'
import React, { useState } from 'react';

const Counter = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue); // Usar el valor pasado por props
  const [showCounter, setShowCounter] = useState(false); // Controla la visibilidad

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const toggleCounter = () => setShowCounter(!showCounter); // Función para alternar visibilidad

  return (
    <div id='flex-container1'>
      <div id='flex-auto1' onClick={toggleCounter}><h1>Añade un aplauso</h1></div>
      {showCounter && ( // Mostrar u ocultar el contador
        <div id='default1'>
          <h2>Maquina contadora de aplausos: {count}</h2>
          <button onClick={increment}>GO</button>
          <button onClick={decrement}>Quitar aplauso</button>
        </div>
      )}
    </div>
  );
};

export default Counter;
// import React, { Component } from 'react';

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       contador: 0
//     };
//   }
//   incrementar = () => {
//     this.setState((prevState) => ({
//       contador: prevState.contador + 1
//     }));
//   };
//   decrementar = () => {
//     this.setState((prevState) => ({
//       contador: prevState.contador - 1
//     }));
//   };

//   render() {
//     return (
//       <div>
//         <h1>Contador: {this.state.contador}</h1>
//         <button onClick={this.incrementar}>Incrementar</button>
//         <button onClick={this.decrementar}>Decrementar</button>
//       </div>
//     );
//   }
// }

// export default Counter;