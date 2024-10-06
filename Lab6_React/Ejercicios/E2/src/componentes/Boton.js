import React, { Component } from 'react';
import '../estilos/Boton.css';

class Boton extends Component {
  render() {
    const { texto, esBotonDeClic, manejarClic } = this.props;
    return (
      <button
        className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
        onClick={manejarClic}
      >
        {texto}
      </button>
    );
  }
}

export default Boton;
