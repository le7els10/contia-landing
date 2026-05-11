import { type FC } from 'react';
import { UserPlus, BookOpen, Send } from 'lucide-react';
import './howitworks.scss';

const steps = [
  {
    number: '01',
    icon: UserPlus,
    title: 'Crea tu cuenta en minutos',
    description:
      'Regístrate con tu correo, ingresa los datos de tu negocio y listo. Sin instalaciones, sin complicaciones.',
  },
  {
    number: '02',
    icon: BookOpen,
    title: 'Registra clientes y productos',
    description:
      'Agrega tu catálogo de productos o servicios y los datos de tus clientes una sola vez. Contia los recuerda por ti.',
  },
  {
    number: '03',
    icon: Send,
    title: 'Emite facturas válidas ante la DIAN',
    description:
      'Con un par de clics tienes tu factura electrónica lista. La enviamos directamente a la DIAN y a tu cliente.',
  },
];

const HowItWorks: FC = () => {
  return (
    <section
      className="how-it-works section"
      id="como-funciona"
      aria-labelledby="how-heading"
    >
      <div className="container">
        <header className="how-it-works__header">
          <h2 className="how-it-works__heading" id="how-heading">
            Cómo funciona
          </h2>
          <p className="how-it-works__subheading">
            En menos de 5 minutos tu negocio ya puede emitir facturas electrónicas.
          </p>
        </header>

        <ol className="how-it-works__steps" role="list">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <li className="how-it-works__step" key={step.number}>
                <div className="how-it-works__step-number" aria-hidden="true">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="how-it-works__connector" aria-hidden="true" />
                )}
                <div className="how-it-works__step-icon" aria-hidden="true">
                  <Icon size={22} />
                </div>
                <h3 className="how-it-works__step-title">{step.title}</h3>
                <p className="how-it-works__step-desc">{step.description}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorks;
