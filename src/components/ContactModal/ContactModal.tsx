import { type FC, useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import './contactmodal.scss';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialForm: FormState = { name: '', email: '', phone: '', message: '' };

const ContactModal: FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Trap focus & lock scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on Escape
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contia contact form payload:', form);
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setForm(initialForm);
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div
      className="contact-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      ref={overlayRef}
      onClick={handleOverlayClick}
    >
      <div className="contact-modal__dialog">
        <button
          className="contact-modal__close"
          onClick={handleClose}
          aria-label="Cerrar modal"
          ref={closeButtonRef}
        >
          <X size={20} aria-hidden="true" />
        </button>

        {submitted ? (
          <div className="contact-modal__success">
            <div className="contact-modal__success-icon" aria-hidden="true">✓</div>
            <h2 className="contact-modal__success-title">¡Mensaje enviado!</h2>
            <p className="contact-modal__success-text">
              Gracias por contactarnos. Te responderemos pronto.
            </p>
            <button className="contact-modal__submit" onClick={handleClose}>
              Cerrar
            </button>
          </div>
        ) : (
          <>
            <h2 className="contact-modal__title" id="modal-title">
              Hablemos
            </h2>
            <p className="contact-modal__subtitle">
              Cuéntanos sobre tu negocio y te ayudamos a empezar.
            </p>

            <form className="contact-modal__form" onSubmit={handleSubmit} noValidate>
              <div className="contact-modal__field">
                <label className="contact-modal__label" htmlFor="name">
                  Nombre completo <span aria-hidden="true">*</span>
                </label>
                <input
                  className="contact-modal__input"
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  placeholder="María González"
                />
              </div>

              <div className="contact-modal__field">
                <label className="contact-modal__label" htmlFor="email">
                  Correo electrónico <span aria-hidden="true">*</span>
                </label>
                <input
                  className="contact-modal__input"
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  placeholder="maria@tunegocio.co"
                />
              </div>

              <div className="contact-modal__field">
                <label className="contact-modal__label" htmlFor="phone">
                  Teléfono <span className="contact-modal__optional">(opcional)</span>
                </label>
                <input
                  className="contact-modal__input"
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  placeholder="+57 300 000 0000"
                />
              </div>

              <div className="contact-modal__field">
                <label className="contact-modal__label" htmlFor="message">
                  Mensaje <span aria-hidden="true">*</span>
                </label>
                <textarea
                  className="contact-modal__textarea"
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Cuéntanos sobre tu negocio y qué necesitas..."
                />
              </div>

              <button className="contact-modal__submit" type="submit">
                Enviar mensaje
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
