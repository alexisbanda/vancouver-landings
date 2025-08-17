
import React from 'react';
import AnimatedSection from './AnimatedSection';
import styles from './Pricing.module.css';

const Pricing: React.FC = () => {
    const scrollToSection = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    return (
        <AnimatedSection id="precios" className="py-16 bg-gray-100 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 4rem)' }}>
                Elige el Plan Perfecto para Ti
            </h2>
            <p className="text-lg text-gray-600 mb-8" style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)' }}>
                🚀 ¡Solo 10 plazas disponibles este mes! No pierdas la oportunidad de optimizar tu negocio.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 sm:px-6">
                <div className={styles.card}>
                    <h3 className="text-xl font-bold text-blue-800 mb-2">Landing Básica 🟢</h3>
                    <p className="text-4xl font-bold text-blue-600 mb-4">$75</p>
                    <p className="text-gray-600 mb-4">🚀 Ideal para freelancers y pequeños negocios que necesitan presencia en línea.</p>
                    <ul className="text-left text-sm text-gray-600 list-disc list-inside mb-6 space-y-1">
                        <li>Diseño responsivo y rápido.</li>
                        <li>Formulario de contacto básico.</li>
                        <li>Entrega en 24 horas.</li>
                    </ul>
                    <button onClick={() => scrollToSection('contacto')} className="bg-blue-600 text-white px-6 py-2 rounded-full transition-transform transform hover:scale-105 hover:bg-blue-500">Solicitar</button>
                </div>

                <div className={`${styles.card} ${styles.popular}`}>
                    <span className={styles.badge}>Más Popular</span>
                    <h3 className="text-xl font-bold text-blue-800 mb-2">Landing + Bot ⭐</h3>
                    <p className="text-4xl font-bold text-blue-600 mb-4">$175</p>
                    <p className="text-gray-600 mb-4">🤖 Perfecto para negocios que reciben muchas consultas y quieren automatizar respuestas.</p>
                    <ul className="text-left text-sm text-gray-600 list-disc list-inside mb-6 space-y-1">
                        <li>Incluye todo lo de la Landing Básica.</li>
                        <li>Bot de WhatsApp para responder consultas.</li>
                        <li>SEO básico incluido.</li>
                    </ul>
                    <button onClick={() => scrollToSection('contacto')} className="bg-blue-600 text-white px-6 py-2 rounded-full transition-transform transform hover:scale-105 hover:bg-blue-500">Solicitar</button>
                </div>

                <div className={styles.card}>
                    <h3 className="text-xl font-bold text-blue-800 mb-2">Automatización Pro 🔵</h3>
                    <p className="text-4xl font-bold text-blue-600 mb-4">$150</p>
                    <p className="text-gray-600 mb-4">🔗 Ideal para negocios que quieren optimizar su flujo de trabajo con automatización.</p>
                    <ul className="text-left text-sm text-gray-600 list-disc list-inside mb-6 space-y-1">
                        <li>Bot de WhatsApp avanzado.</li>
                        <li>Automatización de email marketing.</li>
                        <li>Integración con CRM y más.</li>
                    </ul>
                    <button onClick={() => scrollToSection('contacto')} className="bg-blue-600 text-white px-6 py-2 rounded-full transition-transform transform hover:scale-105 hover:bg-blue-500">Solicitar</button>
                </div>
            </div>

            <div className="overflow-x-auto max-w-6xl mx-auto px-4 sm:px-6 mt-10">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                    <thead className="bg-blue-800 text-white">
                        <tr>
                            <th className="p-4 text-left">Características</th>
                            <th className="p-4 text-center">Básica 🟢</th>
                            <th className="p-4 text-center">Landing + Bot ⭐</th>
                            <th className="p-4 text-center">Pro 🔵</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b"><td className="p-4 text-left font-semibold">Landing Personalizada</td><td className="p-4 text-center">✅</td><td className="p-4 text-center">✅</td><td className="p-4 text-center">🚫</td></tr>
                        <tr className="border-b bg-gray-50"><td className="p-4 text-left font-semibold">SEO Básico</td><td className="p-4 text-center">🚫</td><td className="p-4 text-center">✅</td><td className="p-4 text-center">🚫</td></tr>
                        <tr className="border-b"><td className="p-4 text-left font-semibold">Bot de WhatsApp</td><td className="p-4 text-center">🚫</td><td className="p-4 text-center">✅ Básico</td><td className="p-4 text-center">✅ Avanzado</td></tr>
                        <tr className="border-b bg-gray-50"><td className="p-4 text-left font-semibold">Flujos de Email</td><td className="p-4 text-center">🚫</td><td className="p-4 text-center">🚫</td><td className="p-4 text-center">✅</td></tr>
                        <tr><td className="p-4 text-left font-semibold">Integraciones</td><td className="p-4 text-center">🚫</td><td className="p-4 text-center">🚫</td><td className="p-4 text-center">✅</td></tr>
                    </tbody>
                </table>
            </div>
        </AnimatedSection>
    );
};

export default Pricing;
