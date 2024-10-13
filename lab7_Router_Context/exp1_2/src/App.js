import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './componentes/Layout';
import Ropa from './componentes/Ropa';
import Electronico from './componentes/Electronico';
import Accesorios from './componentes/Accesorios';
import Electrodomesticos from './componentes/Electrodomésticos';

import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Ropa" element={<Ropa />} />
          <Route path="Electronico" element={<Electronico />} />
          <Route path="Accesorios" element={<Accesorios />} /> {/* Corregido aquí */}
          <Route path="Electrodomesticos" element={<Electrodomesticos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
