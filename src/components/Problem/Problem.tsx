import { type FC } from 'react';
import { AlertCircle, Clock, FileX, CheckCircle, Smartphone, HeadphonesIcon } from 'lucide-react';
import './problem.scss';

const problems = [
  {
    icon: AlertCircle,
    text: 'No sabes si cumples con la DIAN y el miedo a una multa te quita el sueño.',
  },
  {
    icon: FileX,
    text: 'Pierdes ventas porque tus clientes grandes exigen factura electrónica y tú no puedes dársela.',
  },
  {
    icon: Clock,
    text: 'Pasas horas llenando facturas a mano o te arriesgas a multas por no cumplir con la DIAN.',
  },
];

const solutions = [
  {
    icon: CheckCircle,
    text: 'Emite facturas electrónicas válidas ante la DIAN en segundos, desde cualquier dispositivo.',
  },
  {
    icon: Smartphone,
    text: 'Interfaz pensada para ti, no para contadores. Si sabes usar el celular, sabes usar Contia.',
  },
  {
    icon: HeadphonesIcon,
    text: 'Guías paso a paso en español y soporte por WhatsApp cuando lo necesitas. Sin tecnicismos.',
  },
];

const Problem: FC = () => {
  return (
    <section
      className="problem section"
      id="problema"
      aria-labelledby="problem-heading"
    >
      <div className="container problem__inner">
        <div className="problem__column problem__column--left">
          <span className="problem__label">El problema</span>
          <h2 className="problem__heading" id="problem-heading">
            Facturar no debería ser tan difícil
          </h2>
          <ul className="problem__list" role="list">
            {problems.map((item, i) => {
              const Icon = item.icon;
              return (
                <li className="problem__item" key={i}>
                  <Icon
                    className="problem__icon problem__icon--problem"
                    size={22}
                    aria-hidden="true"
                  />
                  <p>{item.text}</p>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="problem__divider" aria-hidden="true" />

        <div className="problem__column problem__column--right">
          <span className="problem__label">La solución</span>
          <h2 className="problem__heading">
            Con Contia, facturas en minutos
          </h2>
          <ul className="problem__list" role="list">
            {solutions.map((item, i) => {
              const Icon = item.icon;
              return (
                <li className="problem__item" key={i}>
                  <Icon
                    className="problem__icon problem__icon--solution"
                    size={22}
                    aria-hidden="true"
                  />
                  <p>{item.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Problem;
