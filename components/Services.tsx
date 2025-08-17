
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { ClockIcon, CodeIcon, HomeIcon } from './Icons';

const Services: React.FC = () => {
  const scrollToSection = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <AnimatedSection id="servicios" className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-4">Soluciones para tu Negocio 🚀</h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
        Más que una página web, creamos <strong>herramientas que trabajan por ti</strong>.
        Ahorra tiempo, atrae clientes y haz crecer tu negocio <strong>rápidamente</strong>.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-blue-600">
          <ClockIcon />
          <h3 className="text-xl font-bold text-blue-800">Landing Pages Optimizadas</h3>
          <p className="mt-2 text-gray-600">Páginas diseñadas para <strong>atraer clientes</strong> y generar ventas en automático.</p>
          <ul className="text-left mt-4 text-sm text-gray-600 list-disc list-inside space-y-1">
            <li>Diseño profesional y rápido.</li>
            <li>Listo en 24h, sin complicaciones.</li>
            <li>Optimizado para Google y redes sociales.</li>
          </ul>
          <button onClick={() => scrollToSection('contacto')} className="bg-blue-600 text-white px-4 py-2 rounded-full mt-4 inline-block transition-transform transform hover:scale-105 hover:bg-blue-500">
            🚀 Quiero mi Landing
          </button>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-green-600">
          <CodeIcon />
          <h3 className="text-xl font-bold text-green-800">Automatización Inteligente</h3>
          <p className="mt-2 text-gray-600">Bots y flujos para <strong>responder clientes automáticamente</strong> y cerrar más ventas.</p>
          <ul className="text-left mt-4 text-sm text-gray-600 list-disc list-inside space-y-1">
            <li>Chatbot para WhatsApp y redes.</li>
            <li>Respuestas instantáneas y captación de leads.</li>
            <li>Integración con formularios y CRM.</li>
          </ul>
          <button onClick={() => scrollToSection('contacto')} className="bg-green-600 text-white px-4 py-2 rounded-full mt-4 inline-block transition-transform transform hover:scale-105 hover:bg-green-500">
            🤖 Quiero Automatizar
          </button>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-yellow-600">
          <HomeIcon />
          <h3 className="text-xl font-bold text-yellow-800">SEO y Conversión 🔥</h3>
          <p className="mt-2 text-gray-600">Aparece en Google y convierte más visitantes en clientes <strong>sin gastar en publicidad</strong>.</p>
          <ul className="text-left mt-4 text-sm text-gray-600 list-disc list-inside space-y-1">
            <li>Optimización SEO para más tráfico.</li>
            <li>Estrategia de conversión efectiva.</li>
            <li>Análisis y ajustes personalizados.</li>
          </ul>
          <button onClick={() => scrollToSection('contacto')} className="bg-yellow-600 text-white px-4 py-2 rounded-full mt-4 inline-block transition-transform transform hover:scale-105 hover:bg-yellow-500">
            🔍 Quiero más Visibilidad
          </button>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Services;
