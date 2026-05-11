import { type FC } from 'react';
import './ctafinal.scss';

interface CtaFinalProps {
  onOpenModal: () => void;
}

const CtaFinal: FC<CtaFinalProps> = ({ onOpenModal }) => {
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
        <button className="cta-final__cta" onClick={onOpenModal}>
          Hablar con nosotros
        </button>
      </div>
    </section>
  );
};

export default CtaFinal;
