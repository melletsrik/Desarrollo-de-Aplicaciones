import React from "react";
import './ListaUsuarios.css';

const usuarios = [
  { id: 1, nombre: "Napoleón Pérez", correo: "napoleon.perez@example.com" },
  { id: 2, nombre: "María López", correo: "maria.lopez@example.com" },
  { id: 3, nombre: "Carlos Ruiz", correo: "carlos.ruiz@example.com" },
];

export default function ListaUsuarios() {
  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            <strong>Nombre:</strong> {usuario.nombre} <br />
            <strong>Correo:</strong> {usuario.correo}
          </li>
        ))}
      </ul>
    </div>
  );
}
