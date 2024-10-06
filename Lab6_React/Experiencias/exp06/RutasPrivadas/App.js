import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import MangaList from "./components/MangaList";

export default function App() {
  const [isAutenticado, setEstaAutenticado] = useState(false);

  return (
    <Router>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<Home setEstaAutenticado={setEstaAutenticado} />}
        />
        <Route
          path="/dashboard"
          element={<Dashboard isAutenticado={isAutenticado} />}
        />
        <Route
          path="/manga/:id"
          element={<MangaList isAutenticado={isAutenticado} />}
        />{" "}
      </Routes>

      <nav>
        <li>
          <Link to="/dashboard">Leer Mangas</Link>
        </li>
      </nav>
    </Router>
  );
}