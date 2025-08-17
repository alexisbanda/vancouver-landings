
import React, { useState, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';
import Form from './Form';

const LeadMagnet: React.FC = () => {
  const [countdown, setCountdown] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  useEffect(() => {
    const offerExpires = new Date('2025-03-10T23:59:59').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = offerExpires - now;
      if (difference <= 0) {
        setCountdown('¡Últimas horas!');
        clearInterval(interval);
        return;
      }
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setCountdown(`${days}d ${hours}h ${minutes}m`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  
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
    <AnimatedSection id="lead-magnet" className="py-16 bg-blue-800 text-white text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 4rem)' }}>Descarga Nuestra Guía Gratuita</h2>
      <p className="text-lg mb-6" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}>"5 Estrategias para Aumentar tus Ventas Online”</p>
      {countdown && <p className="text-lg bg-red-600 px-4 py-2 rounded-lg inline-block mt-4 font-bold">⚡ Oferta termina en <span id="contador-lead">{countdown}</span> ⏳</p>}
      <div className="mt-8 max-w-md mx-auto px-4">
        <Form formName="lead" submitButtonText="Descargar Ahora" onValidate={validate}>
          <input 
            type="email" 
            name="email" 
            placeholder="Tu Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
            className="w-full p-3 rounded-lg mb-2 text-gray-800 border-2 border-transparent focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none" 
            aria-label="Correo Electrónico para Guía" 
          />
          {emailError && <p className="text-red-400 text-sm text-left">{emailError}</p>}
        </Form>
      </div>
    </AnimatedSection>
  );
};

export default LeadMagnet;
