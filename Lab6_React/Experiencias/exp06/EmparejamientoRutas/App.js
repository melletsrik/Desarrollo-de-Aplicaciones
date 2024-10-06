import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Contador from "./classComponents";
import ContadorLikes from "./stateComponents";
import EffectComp from "./effectsComponents";

export default function App() {
  return (
    <Router>
      <h1>Página principal</h1>
      <p>Elija una de las opciones del menú</p>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contador">Contador (Class)</Link>
          </li>
          <li>
            <Link to="/likes">Contador de Likes</Link>
          </li>
          <li>
            <Link to="/effect">Contador con useEffect</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/contador" element={<Contador />} />
        <Route path="/likes" element={<ContadorLikes />} />
        <Route path="/effect" element={<EffectComp />} />
      </Routes>
    </Router>
  );
}