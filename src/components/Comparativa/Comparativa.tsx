import { type FC } from 'react';
import './comparativa.scss';

const Comparativa: FC = () => {
  return (
    <section className="comparativa section" id="comparativa" aria-labelledby="comparativa-heading">
      <div className="container comparativa__inner">
        <header className="comparativa__header">
          <h2 className="comparativa__heading" id="comparativa-heading">
            Una forma diferente de facturar
          </h2>
          <p className="comparativa__subheading">
            Sin mensualidades. Sin sorpresas. Solo pagas cuando facturas.
          </p>
        </header>
        <div className="comparativa__table-wrap">
          <table className="comparativa__table" aria-label="Comparativa Contia vs modelo de mensualidad">
            <thead>
              <tr>
                <th></th>
                <th>Con Contia</th>
                <th>Con mensualidad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pago obligatorio cada mes</td>
                <td className="comparativa__yes">✅ No</td>
                <td className="comparativa__no">❌ Sí</td>
              </tr>
              <tr>
                <td>Facturas sin fecha de vencimiento</td>
                <td className="comparativa__yes">✅ Sí</td>
                <td className="comparativa__no">❌ No</td>
              </tr>
              <tr>
                <td>Pagas solo lo que usas</td>
                <td className="comparativa__yes">✅ Sí</td>
                <td className="comparativa__no">❌ No</td>
              </tr>
              <tr>
                <td>Válido ante la DIAN</td>
                <td className="comparativa__yes">✅ Sí</td>
                <td className="comparativa__yes">✅ Sí</td>
              </tr>
              <tr>
                <td>Costo mínimo anual</td>
                <td className="comparativa__yes">$39.900</td>
                <td className="comparativa__no">+$200.000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="comparativa__footer">
          Si hay meses en que no facturas, ¿por qué pagar igual?<br />
          Con Contia tu saldo te espera sin vencimiento.
        </p>
      </div>
    </section>
  );
};

export default Comparativa;
