//Aquí se trabajaron las experiencias 1, 2, 3
import Prueba from "./Prueba/Prueba";
import Prueba2 from "./Formulario/Prueba2";
import ListaUsuarios from "./ListaUsuarios/ListaUsuarios";

export default function App() {
  return (
    <div>
      <Prueba
        titulo="React usando Node.js y NPM"
        mensaje="Este es un mensaje desde props"
        textoBoton="Haz clic aquí"
      />
      <br />
      <Prueba2 nombre="Napoleón Pérez" correo="napoleon.perez@example.com" />
      <br/>
      <ListaUsuarios />
    </div>
  );
}