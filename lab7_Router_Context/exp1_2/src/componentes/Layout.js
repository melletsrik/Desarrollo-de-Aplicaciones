import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/Ropa">Ropa</Link></li>
          <li><Link to="/Electronico">Electronico</Link></li>
        </ul>
      </nav>
      <Outlet /> {}
    </div>
  );
}
