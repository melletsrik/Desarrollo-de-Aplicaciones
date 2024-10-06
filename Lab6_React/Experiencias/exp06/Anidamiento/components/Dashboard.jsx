import { Outlet, Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h2>Panel</h2>
      <nav>
        <ul>
          <li>
            <Link to="profile">Perfil</Link>
          </li>
          <li>
            <Link to="settings">Configuraciones</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}