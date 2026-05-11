import { type FC } from 'react';
import './footer.scss';

const Footer: FC = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="/" className="footer__logo" aria-label="Contia — Ir al inicio">
            <img
              src="/assets/logo-inverse.svg"
              alt="Contia"
              width="117"
              height="30"
              loading="lazy"
            />
          </a>
          <p className="footer__tagline">
            Facturación electrónica para microempresarios colombianos.
          </p>
        </div>

        <nav className="footer__nav" aria-label="Navegación del pie de página">
          <a href="#como-funciona" className="footer__link">Cómo funciona</a>
          <a href="#servicios" className="footer__link">Servicios</a>
          <a href="#planes" className="footer__link">Planes</a>
        </nav>

        <div className="footer__legal-links">
          <a href="/terminos" className="footer__link">Términos</a>
          <a href="/privacidad" className="footer__link">Privacidad</a>
        </div>

        <p className="footer__copy">
          © 2026 Contia. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
