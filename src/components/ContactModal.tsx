import { useEffect } from 'react';

interface ContactModalProps {
  onClose: () => void;
}

export default function ContactModal({ onClose }: ContactModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="modal-overlay active" onClick={(e) => {
      if (e.target === e.currentTarget) onClose();
    }}>
      <div className="modal-content contact-modal-content">
        <button className="modal-close" onClick={onClose}>&times;</button>

        <div className="contact-modal-body">
          <h2 className="contact-title">LET'S WORK TOGETHER</h2>
          <p className="contact-subtitle">¿Tienes un proyecto en mente? Contáctame</p>

          <div className="contact-info">
            <div className="contact-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <div>
                <span className="contact-label">Email</span>
                <a href="mailto:danielnovle6@gmail.com" className="contact-link">danielnovle6@gmail.com</a>
              </div>
            </div>

            <div className="contact-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              <div>
                <span className="contact-label">WhatsApp</span>
                <a href="https://wa.me/573105334580" target="_blank" rel="noopener noreferrer" className="contact-link">+57 310 533 4580</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
