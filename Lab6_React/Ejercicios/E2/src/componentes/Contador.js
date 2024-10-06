import React from 'react';
import '../estilos/Contador.css';

function Contador({ numClics }) {
  return (
    <div className='contador'>
      Kudos:{numClics}
    </div>
  );   
}

export default Contador;