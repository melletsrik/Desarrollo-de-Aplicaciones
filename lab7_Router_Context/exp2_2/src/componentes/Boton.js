import React from 'react';
import { Link } from 'react-router-dom';
import '../estilos/Boton.css';

class Boton extends React.Component {
  render() {
    const { texto, to, manejarClic } = this.props;

    if (to) {
      return (
        <Link to={to} className='esBotonDeClic'>
          {texto}
        </Link>
      );
    }

    return (
      <button className='esBotonDeClic' onClick={manejarClic}>
        {texto}
      </button>
    );
  }
}

export default Boton;
