import React from "react";
import VentaPasajes from "./componentes/VentaPasajes";
import Inscripcion from "./componentes/Inscripcion";

function App() {
    return (
        <div>
            <h1>Aplicación de Venta de Pasajes Aéreos</h1>
            <Inscripcion />
            <VentaPasajes />
        </div>
    );
}

export default App;
