
import React from 'react';

const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <header className="relative h-screen text-white text-center bg-cover bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/dvm4ql8eo/image/upload/c_crop,w_1500/v1740504116/canada-vancouver-banner_bgbose.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 sm:px-8 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 5rem)' }}>Tu Negocio Online en 24 Horas</h1>
        <p className="mt-6 text-lg sm:text-2xl" style={{ fontSize: 'clamp(1rem, 3vw, 2rem)' }}>Landing pages y automatización para freelancers, tiendas y negocios locales.</p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button onClick={() => scrollToSection('precios')} className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-transform transform hover:scale-105 hover:bg-blue-500">Ver Planes</button>
          <button onClick={() => scrollToSection('contacto')} className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold transition-transform transform hover:scale-105 hover:bg-white hover:text-blue-600">Contáctanos</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
