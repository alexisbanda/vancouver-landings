
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import Form from './Form';

const ResourceForm: React.FC<{ formName: string; title: string; description: string; }> = ({ formName, title, description }) => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

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
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-blue-800 mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <Form formName={formName} submitButtonText="Descargar Ahora" onValidate={validate}>
                <input
                    type="email"
                    name="email"
                    placeholder="Tu Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-3 rounded-lg mb-2 text-gray-800 border-2 border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    aria-label={`Correo para ${title}`}
                />
                {emailError && <p className="text-red-500 text-sm text-left">{emailError}</p>}
            </Form>
        </div>
    );
};


const Resources: React.FC = () => {
  return (
    <AnimatedSection id="recursos" className="py-16 bg-gray-200 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 4rem)' }}>Recursos Gratuitos para tu Éxito</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 sm:px-6">
        <ResourceForm 
            formName="plantilla"
            title="Plantilla de Landing Page"
            description="Descarga nuestra plantilla GRATIS para crear tu propia landing."
        />
        <ResourceForm 
            formName="checklist"
            title="Checklist de Automatización"
            description="10 pasos para automatizar tu negocio con WhatsApp y Email."
        />
      </div>
    </AnimatedSection>
  );
};

export default Resources;
