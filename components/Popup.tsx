
import React, { useState, useEffect } from 'react';
import Form from './Form';

interface PopupProps {
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setEmailError('Correo inválido.');
      return false;
    }
    setEmailError('');
    return true;
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white p-6 rounded-lg max-w-md text-center relative w-full animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl">&times;</button>
        <h3 className="text-xl font-bold text-blue-800 mb-2">Descarga Gratis</h3>
        <p className="text-gray-600 mb-4">Obtén nuestra "Guía de SEO Local" ¡Regístrate ahora!</p>
        <Form formName="popup" submitButtonText="Descargar Ahora" onValidate={validate}>
          <input
            type="email"
            name="email"
            placeholder="Tu Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 rounded-lg mb-2 text-gray-800 border-2 border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            aria-label="Correo para Pop-up"
          />
          {emailError && <p className="text-red-500 text-sm text-left">{emailError}</p>}
        </Form>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
        
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up { animation: slide-up 0.4s ease-out; }
      `}</style>
    </div>
  );
};

export default Popup;
