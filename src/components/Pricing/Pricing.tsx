import { type FC } from 'react';
import { Check } from 'lucide-react';
import './pricing.scss';
import CertificateInfo from './CertificateInfo';

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
    tagline: '30 documentos · Sin vencimiento',
    features: [
      '30 documentos',
      'Facturas DIAN y POS',
      'Sin mensualidad',
      'Sin contrato',
      'Saldo no vence',
    ],
    recommended: false,
    cta: 'Elegir Starter',
  },
  {
    name: 'Popular',
    price: '$69.900',
    period: '',
    tagline: '60 documentos · Sin vencimiento',
    features: [
      '60 documentos',
      'Facturas DIAN y POS',
      'Sin mensualidad',
      'Sin contrato',
      'Saldo no vence',
    ],
    recommended: true,
    cta: 'Elegir Popular',
  },
  {
    name: 'Creciendo',
    price: '$119.900',
    period: '',
    tagline: '120 documentos · Sin vencimiento',
    features: [
      '120 documentos',
      'Facturas DIAN y POS',
      'Sin mensualidad',
      'Sin contrato',
      'Saldo no vence',
    ],
    recommended: false,
    cta: 'Elegir Creciendo',
  },
  {
    name: 'Pro',
    price: '$189.900',
    period: '',
    tagline: '250 documentos · Sin vencimiento',
    features: [
      '250 documentos',
      'Facturas DIAN y POS',
      'Sin mensualidad',
      'Sin contrato',
      'Saldo no vence',
    ],
    recommended: false,
    cta: 'Elegir Pro',
  },
  {
    name: 'Volumen',
    price: '$299.900',
    period: '',
    tagline: '500 documentos · Sin vencimiento',
    features: [
      '500 documentos',
      'Facturas DIAN y POS',
      'Sin mensualidad',
      'Sin contrato',
      'Saldo no vence',
    ],
    recommended: false,
    cta: 'Elegir Volumen',
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

        <CertificateInfo />

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
          Los paquetes no tienen fecha de vencimiento. El saldo se descuenta igual cada vez que emites una factura electrónica o una venta POS válida ante la DIAN.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
