import { type FC } from 'react';
import './hero.scss';

const Hero: FC = () => {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      {/* Decoración geométrica */}
      <div className="hero__decoration" aria-hidden="true">
        <div className="hero__decoration-circle hero__decoration-circle--1" />
        <div className="hero__decoration-circle hero__decoration-circle--2" />
        <div className="hero__decoration-bar" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__eyebrow">Facturación electrónica · Colombia</span>
          <h1 className="hero__heading" id="hero-heading">
            Facturación electrónica<br />sin complicaciones
          </h1>
          <p className="hero__subheading">
            Emite facturas válidas ante la DIAN desde tu celular, en minutos.
          </p>
          <div className="hero__actions">
            <span className="hero__soon">Muy pronto</span>
            <a href="#planes" className="hero__cta hero__cta--secondary">
              Ver planes
            </a>
          </div>
          <p className="hero__disclaimer">Sin mensualidad · Sin contrato · Sin vencimiento</p>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__card">
            <div className="hero__card-header">
              <div className="hero__card-dot hero__card-dot--red" />
              <div className="hero__card-dot hero__card-dot--yellow" />
              <div className="hero__card-dot hero__card-dot--green" />
            </div>
            <div className="hero__card-body">
              <div className="hero__card-line hero__card-line--label" />
              <div className="hero__card-line hero__card-line--value" />
              <div className="hero__card-divider" />
              <div className="hero__card-row">
                <div className="hero__card-line hero__card-line--sm" />
                <div className="hero__card-line hero__card-line--price" />
              </div>
              <div className="hero__card-row">
                <div className="hero__card-line hero__card-line--sm" />
                <div className="hero__card-line hero__card-line--price" />
              </div>
              <div className="hero__card-divider" />
              <div className="hero__card-total">
                <span>Total</span>
                <strong>$1.250.000</strong>
              </div>
              <div className="hero__card-badge">
                <span>✓ Válida ante la DIAN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
