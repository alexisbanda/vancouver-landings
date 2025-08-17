
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'servicios', label: 'Servicios' },
    { id: 'precios', label: 'Precios' },
    { id: 'contacto', label: 'Contacto' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full text-white py-4 z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-blue-800/70 backdrop-blur-[10px] shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold flex items-center" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
            <img src="https://img.icons8.com/color/48/000000/web-design.png" alt="Logo de Vancouver Landings" className="w-8 h-8 mr-2" />
            Vancouver Landings
          </a>
          <div className="flex sm:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="focus:outline-none" aria-label="Abrir menú">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          <div className="space-x-6 hidden sm:flex">
            {navLinks.map(link => (
              <button key={link.id} onClick={() => scrollToSection(link.id)} className="hover:text-yellow-400 text-lg transition-colors" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)' }}>
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
      <div className={`fixed top-16 left-0 w-full bg-blue-900 p-6 flex flex-col items-center space-y-4 sm:hidden z-40 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {navLinks.map(link => (
          <button key={link.id} onClick={() => scrollToSection(link.id)} className="text-white hover:text-yellow-400 text-lg transition-colors" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)' }}>
            {link.label}
          </button>
        ))}
      </div>
    </>
  );
};

export default Navbar;
