import { Link } from 'react-router'

export const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Kodigo Music</h1>
      <ul>
        {/* Links para cambiar de ruta */}
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/music">Música</Link></li>
        <li><Link to="/register">Registro</Link></li>
      </ul>
    </nav>
  );
};
