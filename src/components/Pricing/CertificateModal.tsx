import { type FC, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import './certificate-modal.scss';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CertificateModal: FC<CertificateModalProps> = ({ isOpen, onClose }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="cert-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
      ref={overlayRef}
      onClick={handleOverlayClick}
    >
      <div className="cert-modal__dialog">
        <button
          className="cert-modal__close"
          onClick={onClose}
          aria-label="Cerrar"
          ref={closeButtonRef}
        >
          <X size={18} aria-hidden="true" />
        </button>

        <h2 className="cert-modal__title" id="cert-modal-title">
          ¿Qué es el certificado digital DIAN?
        </h2>

        <div className="cert-modal__body">
          <div className="cert-modal__section">
            <h3 className="cert-modal__section-title">Qué es</h3>
            <p className="cert-modal__section-text">
              Es un archivo digital que identifica a tu empresa ante la DIAN.
              Sin él, no es posible emitir facturas electrónicas válidas en Colombia.
            </p>
          </div>

          <div className="cert-modal__section">
            <h3 className="cert-modal__section-title">Cómo se usa en Contia</h3>
            <p className="cert-modal__section-text">
              Lo configuramos una sola vez en tu cuenta.
              Después de eso, todas tus facturas se firman automáticamente —
              tú no tienes que hacer nada más.
            </p>
          </div>

          <div className="cert-modal__section">
            <h3 className="cert-modal__section-title">Si ya tienes uno</h3>
            <p className="cert-modal__section-text">
              Solo compártenos tu archivo (.p12 o .pfx) y su contraseña al momento
              de registrarte. La configuración es completamente gratis.
            </p>
          </div>

          <div className="cert-modal__section">
            <h3 className="cert-modal__section-title">Si no tienes uno</h3>
            <p className="cert-modal__section-text">
              Nosotros lo tramitamos por ti ante una entidad certificadora autorizada.
              Costo único: <strong>$104.900 COP</strong>. Nunca se repite.
            </p>
          </div>
        </div>

        <button className="cert-modal__cta" onClick={onClose}>
          Entendido
        </button>
      </div>
    </div>
  );
};

export default CertificateModal;
