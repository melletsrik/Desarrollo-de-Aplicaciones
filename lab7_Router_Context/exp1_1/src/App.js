import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import CategoriaAnime from "./components/nivel02/CategoriasAnime";
import ListaAnimes from "./components/nivel03/ListaAnimes";
import DetalleAnime from "./components/nivel04/DetalleAnime";
import DetalleCapitulo from "./components/nivel05/DetalleCapitulo";
import NoPage from "./components/NoPage";
import Home from "./components/Home";
import ProximosEstrenos from "./components/ProximosEstrenos";
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="proximos-estrenos" element={<ProximosEstrenos />} />
          <Route path="categorias" element={<CategoriaAnime />} />
          <Route path="categoria/:nombreCategoria" element={<ListaAnimes />} />
          <Route path="anime/:nombreAnime" element={<DetalleAnime />} />
          <Route path="anime/:nombreAnime/capitulo/:numCapitulo" element={<DetalleCapitulo />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}