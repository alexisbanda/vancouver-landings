
import React from 'react';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-blue-900 text-white py-8 text-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 sm:px-6">
        <div>
          <h3 className="text-xl font-bold mb-2 text-blue-300">Vancouver Landings</h3>
          <p className="text-sm">Soluciones web y automatización para tu éxito.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2 text-blue-300">Enlaces</h3>
          <ul className="text-sm space-y-2">
            <li><button onClick={() => scrollToSection('servicios')} className="hover:text-yellow-400">Servicios</button></li>
            <li><button onClick={() => scrollToSection('precios')} className="hover:text-yellow-400">Precios</button></li>
            <li><button onClick={() => scrollToSection('contacto')} className="hover:text-yellow-400">Contacto</button></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2 text-blue-300">Contáctanos</h3>
          <p className="text-sm">📧 Email: <a href="mailto:hola@vancouverlandings.com" className="hover:text-yellow-400">hola@vancouverlandings.com</a></p>
          <p className="text-sm">📞 Tel: <a href="tel:+16043799516" className="hover:text-yellow-400">+1 (604) 379-9516</a></p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2 text-blue-300">Síguenos</h3>
          <div className="flex justify-center space-x-4 text-2xl">
            <a href="https://wa.me/16043799516" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">📞</a>
            <a href="https://twitter.com/VancouverLandings" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">🐦</a>
            <a href="https://linkedin.com/company/vancouverlandings" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">in</a>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-4 border-t border-blue-800">
        <p className="text-sm">© {new Date().getFullYear()} Vancouver Landings. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
