import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/Ropa">Ropa</Link></li>
          <li><Link to="/Electronico">Electrónico</Link></li>
          <li><Link to="/Accesorios">Accesorios</Link></li> {}
          <li><Link to="/Electrodomesticos">Electrodomésticos</Link></li> {}
        </ul>
      </nav>
      <Outlet /> {}
    </div>
  );
}

