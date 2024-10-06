import './App.css';
import eleceedLogo from './imagenes/logoEleceed.png'; 
import Inicio from './paginas/Inicio';
import Personajes from './paginas/Personajes';
import Cronometro from './componentes/Cronometro';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { useState } from 'react';
import Login from './paginas/Login';
import Comentario from './paginas/Comentario';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className='App'>
        <div className='parteSuperior'>
          <div className='contenedorLogo'>
            <Cronometro />
            <img className='logo' src={eleceedLogo} alt='Loguito' /> 
          </div>
          <nav>
            {/*Emparejamietno de rutas*/}
            <Link to="/">Inicio</Link>
            <Link to="/personajes">Personajes</Link>
            <Link to="/login">Login</Link>
            <Link to="/comentario">Comentario</Link>
            <Link to="/capitulos">Comentario</Link>
            <Link to="/capitulos/id ">Comentario</Link>
          </nav>

        </div>
        <Routes>
          {/* Emparejamietno de rutas */}
          <Route path="/" element={<Inicio />} />
          <Route path="/personajes/*" element={<Personajes />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          {/* Ruta privada para comentarios */}
          
          <Route path="/comentario" element={<Comentario />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
