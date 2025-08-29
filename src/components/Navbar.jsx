import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo me-5" onClick={closeMenu}>
          <span className="logo-icon">♪</span>
          <span className="logo-text">Kodigo Music</span>
        </Link>

        {/* Menú Hamburguesa */}
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Links de navegación */}
        <ul className={`navbar-nav ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link 
              to="/music" 
              className={`nav-link ${location.pathname === '/music' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Música
            </Link>
          </li>
          <li>
            <Link 
              to="/register" 
              className={`nav-link ${location.pathname === '/register' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Registro
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};