import { type FC, useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './navbar.scss';

// Inline SVG eliminates the extra network request for the logo asset
const LogoInline: FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 249.984 64"
    role="img"
    aria-label="Contia"
    className="navbar__logo-svg"
    focusable="false"
  >
    <g>
      <path
        d="M50 18 C 45.5 12.5 38.5 9 31 9 C 18.3 9 8 19.3 8 32"
        stroke="#c25a2c"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M8 32 C 8 44.7 18.3 55 31 55 C 38.5 55 45.5 51.5 50 46"
        stroke="#31344b"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
    </g>
    <text
      x="78.08"
      y="47.36"
      fontFamily="'DM Sans', system-ui, sans-serif"
      fontWeight="600"
      fontSize="50.56"
      letterSpacing="-1.7696"
      fill="#31344b"
    >
      Contia
    </text>
  </svg>
);

const Navbar: FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="banner">
      <div className="container navbar__inner">
        <a href="/" className="navbar__logo" aria-label="Contia — Ir al inicio">
          <LogoInline />
        </a>

        <nav className={`navbar__nav${menuOpen ? ' navbar__nav--open' : ''}`} aria-label="Navegación principal">
          <a href="#como-funciona" className="navbar__link" onClick={handleNavClick}>Cómo funciona</a>
          <a href="#servicios" className="navbar__link" onClick={handleNavClick}>Servicios</a>
          <a href="#planes" className="navbar__link" onClick={handleNavClick}>Planes</a>
          <span className="navbar__soon">Muy pronto</span>
        </nav>

        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
