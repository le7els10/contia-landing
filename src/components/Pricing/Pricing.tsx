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
    name: 'Starter',
    price: '$39.900',
    period: '',
    tagline: '30 facturas · Sin vencimiento',
    features: [
      '30 facturas electrónicas',
      'Sin mensualidad',
      'Sin contrato',
      'Saldo no vence',
      'Válido ante la DIAN',
    ],
    recommended: false,
    cta: 'Elegir Starter',
  },
  {
    name: 'Popular',
    price: '$69.900',
    period: '',
    tagline: '60 facturas · Sin vencimiento',
    features: [
      '60 facturas electrónicas',
      'Sin mensualidad',
      'Sin contrato',
      'Saldo no vence',
      'Válido ante la DIAN',
    ],
    recommended: true,
    cta: 'Elegir Popular',
  },
  {
    name: 'Creciendo',
    price: '$119.900',
    period: '',
    tagline: '120 facturas · Sin vencimiento',
    features: [
      '120 facturas electrónicas',
      'Sin mensualidad',
      'Sin contrato',
      'Saldo no vence',
      'Válido ante la DIAN',
    ],
    recommended: false,
    cta: 'Elegir Creciendo',
  },
  {
    name: 'Pro',
    price: '$189.900',
    period: '',
    tagline: '250 facturas · Sin vencimiento',
    features: [
      '250 facturas electrónicas',
      'Sin mensualidad',
      'Sin contrato',
      'Saldo no vence',
      'Válido ante la DIAN',
    ],
    recommended: false,
    cta: 'Elegir Pro',
  },
];

const Pricing: FC = () => {
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
            Sin mensualidad. Sin contrato. Pagas solo cuando facturas.
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
              </div>

              <ul className="pricing__features" role="list">
                {plan.features.map((feature) => (
                  <li className="pricing__feature" key={feature}>
                    <Check size={16} className="pricing__check" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <span className="pricing__soon">Muy pronto</span>
            </li>
          ))}
        </ul>

        <p className="pricing__note">
          Los paquetes no tienen fecha de vencimiento. El saldo se descuenta cada vez que emites una factura válida ante la DIAN.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
