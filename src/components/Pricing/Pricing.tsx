import { type FC } from 'react';
import { Check } from 'lucide-react';
import './pricing.scss';

interface Plan {
  name: string;
  price: string;
  period: string;
  tagline: string;
  features: string[];
  recommended: boolean;
  cta: string;
}

const plans: Plan[] = [
  {
    name: 'Esencial',
    price: '$29.900',
    period: 'mes',
    tagline: 'Ideal para negocios que están comenzando',
    features: [
      'Hasta 50 facturas por mes',
      '1 usuario',
      'Envío directo a la DIAN',
      'Descarga en PDF',
      'Soporte por correo',
    ],
    recommended: false,
    cta: 'Empezar con Esencial',
  },
  {
    name: 'Pro',
    price: '$69.900',
    period: 'mes',
    tagline: 'Para negocios que facturan más',
    features: [
      'Facturas ilimitadas',
      'Hasta 3 usuarios',
      'Envío directo a la DIAN',
      'Descarga en PDF y XML',
      'Reportes y estadísticas',
      'Soporte prioritario',
    ],
    recommended: true,
    cta: 'Empezar con Pro',
  },
];

interface PricingProps {
  onOpenModal: () => void;
}

const Pricing: FC<PricingProps> = ({ onOpenModal }) => {
  return (
    <section
      className="pricing section"
      id="planes"
      aria-labelledby="pricing-heading"
    >
      <div className="container">
        <header className="pricing__header">
          <h2 className="pricing__heading" id="pricing-heading">
            Planes y precios
          </h2>
          <p className="pricing__subheading">
            Sin letra pequeña, sin cobros escondidos. Cancela cuando quieras.
          </p>
        </header>

        <ul className="pricing__grid" role="list">
          {plans.map((plan) => (
            <li
              key={plan.name}
              className={`pricing__card${plan.recommended ? ' pricing__card--recommended' : ''}`}
            >
              {plan.recommended && (
                <div className="pricing__recommended-badge">Más popular</div>
              )}
              <div className="pricing__card-top">
                <h3 className="pricing__plan-name">{plan.name}</h3>
                <p className="pricing__plan-tagline">{plan.tagline}</p>
              </div>

              <div className="pricing__price">
                <span className="pricing__price-amount">{plan.price}</span>
                <span className="pricing__price-period">/ {plan.period}</span>
              </div>

              <ul className="pricing__features" role="list">
                {plan.features.map((feature) => (
                  <li className="pricing__feature" key={feature}>
                    <Check size={16} className="pricing__check" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`pricing__cta${plan.recommended ? ' pricing__cta--primary' : ' pricing__cta--secondary'}`}
                onClick={onOpenModal}
              >
                {plan.cta}
              </button>
            </li>
          ))}
        </ul>

        <p className="pricing__note">
          ¿Tienes dudas sobre qué plan necesitas?{' '}
          <button className="pricing__note-link" onClick={onOpenModal}>
            Habla con nosotros
          </button>{' '}
          y te ayudamos.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
