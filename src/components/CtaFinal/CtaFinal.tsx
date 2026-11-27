import { type FC } from 'react';
import './ctafinal.scss';

const WA_HREF = 'https://wa.me/573002391674?text=Hola%2C%20quiero%20empezar%20a%20facturar%20con%20Contia';

interface CtaFinalProps {
  onOpenContact: () => void;
}

const CtaFinal: FC<CtaFinalProps> = ({ onOpenContact }) => {
  return (
    <section
      className="cta-final section"
      id="contacto"
      aria-labelledby="cta-final-heading"
    >
      <div className="container cta-final__inner">
        <a href="/" className="cta-final__logo" aria-label="Contia — Ir al inicio">
          <img
            src="/assets/logo-inverse.svg"
            alt="Contia"
            width="141"
            height="36"
            loading="lazy"
          />
        </a>
        <h2 className="cta-final__heading" id="cta-final-heading">
          Tu negocio merece facturar bien
        </h2>
        <p className="cta-final__subheading">
          Empieza hoy a facturar electrónicamente sin complicaciones.
        </p>
        <div className="cta-final__actions">
          <a
            href={WA_HREF}
            className="cta-final__cta cta-final__cta--primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Escríbenos por WhatsApp
          </a>
          <button
            className="cta-final__cta cta-final__cta--secondary"
            onClick={onOpenContact}
            type="button"
          >
            Enviar correo
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaFinal;
