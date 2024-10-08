import './App.css';
import eleceedLogo from './imagenes/logoEleceed.png'; 
import Inicio from './paginas/Inicio';
import Personajes from './paginas/Personajes';
import Cronometro from './componentes/Cronometro';
import { BrowserRouter, Route, Link, Routes, Navigate} from 'react-router-dom';
import { useState } from 'react';
import Login from './paginas/Login';
import Comentario from './paginas/Comentario';
import Capitulos from './paginas/Capitulos';
import CapitulosNuevos from './paginas/CapitulosNuevos';
import CapitulosMasGustados from './paginas/CapitulosMasGustados';
import Tabla from './componentes/Tabla'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  
  const [capitulos, setCapitulos] = useState([
    { numero: 1, titulo: 'El inicio del fin' },
    { numero: 2, titulo: 'En lo profundo' },
    { numero: 3, titulo: 'El encuentro' },
    { numero: 4, titulo: 'Un día oscuro' },
  ]);

  return (
    <BrowserRouter>
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
            <Link to="/capitulos">Capítulos</Link>
            <Link to="/login">Login</Link>
            <Link to="/comentario">Comentario</Link>
          </nav>

        </div>
        <Routes>
          {/* Emparejamietno de rutas */}
          <Route path="/" element={<Inicio />} />
          <Route path="/personajes/*" element={<Personajes />} />
          <Route path="/capitulos" element={<Capitulos />}>
            {/* Ruta index para mostrar la tabla en la ruta principal de /capitulos */}
            <Route index element={<Tabla capitulos={capitulos} />} />
            {/* Rutas anidadas */}
            <Route path="nuevos" element={<CapitulosNuevos />} />
            <Route path="gustados" element={<CapitulosMasGustados />} />
          </Route>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          {/* Ruta privada*/}          
          <Route path="/comentario" element={
            isLoggedIn ? <Comentario /> : <Navigate to="/login" />
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
