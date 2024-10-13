import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './componentes/Layout';
import Ropa from './componentes/Ropa';
import Electronico from './componentes/Electronico';
import './index.css';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Ropa" element={<Ropa />} />   {/* Ruta para la categoría de ropa */}
          <Route path="Electronico" element={<Electronico />} /> {/* Ruta para la categoría de electrónica */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
