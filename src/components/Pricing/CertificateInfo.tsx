import { type FC, useState } from 'react';
import { CheckCircle, FileText, Info } from 'lucide-react';
import './certificate-info.scss';
import CertificateModal from './CertificateModal';

const CertificateInfo: FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="cert-info" aria-label="Información sobre el certificado DIAN">
      <div className="cert-info__title-row">
        <h3 className="cert-info__title">¿Qué necesitas para empezar?</h3>
        <button
          className="cert-info__info-trigger"
          onClick={() => setModalOpen(true)}
          aria-label="Más información sobre el certificado DIAN"
        >
          <Info size={15} aria-hidden="true" />
          <span>¿Qué es el certificado DIAN?</span>
        </button>
      </div>

      <CertificateModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <div className="cert-info__options">
        <div className="cert-info__option">
          <CheckCircle size={28} className="cert-info__icon cert-info__icon--check" aria-hidden="true" />
          <p className="cert-info__label">Ya tengo mi certificado DIAN</p>
          <p className="cert-info__desc">Configúralo gratis y empieza a facturar</p>
        </div>

        <div className="cert-info__option">
          <FileText size={28} className="cert-info__icon cert-info__icon--file" aria-hidden="true" />
          <p className="cert-info__label">No tengo certificado</p>
          <p className="cert-info__desc cert-info__desc--accent">
            Lo tramitamos por ti —{' '}
            <strong>$104.900, una sola vez</strong>
          </p>
        </div>
      </div>

      <p className="cert-info__note">
        El certificado es tuyo para siempre, sin importar cuánto facturas.
      </p>
    </div>
  );
};

export default CertificateInfo;
