import { type FC } from 'react';
import { FileText, Users, Package, type LucideIcon } from 'lucide-react';
import './services.scss';

interface ServiceCard {
  icon: LucideIcon;
  name: string;
  tagline: string;
  description: string;
  available: boolean;
}

const services: ServiceCard[] = [
  {
    icon: FileText,
    name: 'Contia Facturas',
    tagline: 'Facturación electrónica DIAN',
    description:
      'Emite, gestiona y descarga tus facturas electrónicas desde cualquier dispositivo. Cumple con la DIAN sin complicaciones.',
    available: true,
  },
  {
    icon: Users,
    name: 'Contia Nómina',
    tagline: 'Gestión de nómina simplificada',
    description:
      'Liquida nóminas, genera colillas de pago y reporta novedades a la UGPP de forma automática.',
    available: false,
  },
  {
    icon: Package,
    name: 'Contia Inventarios',
    tagline: 'Control de stock en tiempo real',
    description:
      'Lleva el control de tus productos, entradas y salidas. Integrado directamente con tu facturación.',
    available: false,
  },
];

const Services: FC = () => {
  return (
    <section
      className="services section"
      id="servicios"
      aria-labelledby="services-heading"
    >
      <div className="container">
        <header className="services__header">
          <h2 className="services__heading" id="services-heading">
            Nuestros servicios
          </h2>
          <p className="services__subheading">
            Empieza con facturas. Suma herramientas cuando tu negocio las pida.
          </p>
        </header>

        <ul className="services__grid" role="list">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <li
                key={service.name}
                className={`services__card${service.available ? ' services__card--available' : ' services__card--soon'}`}
              >
                <div className="services__card-top">
                  <div className="services__icon-wrap" aria-hidden="true">
                    <Icon size={24} className="services__icon" aria-hidden="true" />
                  </div>
                  <span
                    className={`services__badge${service.available ? ' services__badge--available' : ' services__badge--soon'}`}
                  >
                    {service.available ? 'Disponible' : 'Próximamente'}
                  </span>
                </div>
                <h3 className="services__card-name">{service.name}</h3>
                <p className="services__card-tagline">{service.tagline}</p>
                <p className="services__card-desc">{service.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Services;
