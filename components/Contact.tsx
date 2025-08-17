
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import Form from './Form';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        let isValid = true;
        const newErrors = { name: '', email: '', message: '' };

        if (!formData.name.trim()) {
            newErrors.name = 'Por favor ingresa tu nombre.';
            isValid = false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim() || !emailRegex.test(formData.email)) {
            newErrors.email = 'Correo inválido.';
            isValid = false;
        }
        if (!formData.message.trim()) {
            newErrors.message = 'El mensaje es obligatorio.';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    return (
        <AnimatedSection id="contacto" className="py-16 bg-blue-700 text-white text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 4rem)' }}>Contáctanos Hoy</h2>
            <p className="text-lg mb-6" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}>Respuesta en menos de 24h</p>
            <div className="mt-8 max-w-lg mx-auto px-4">
                <Form formName="contact" submitButtonText="Enviar Mensaje" onValidate={validate}>
                    <input type="text" name="name" placeholder="Tu Nombre" value={formData.name} onChange={handleChange} required className="w-full p-3 rounded-lg mb-2 text-gray-800 border-2 border-transparent focus:ring-2 focus:ring-blue-500 outline-none" aria-label="Nombre" />
                    {errors.name && <p className="text-red-300 text-sm text-left mb-2">{errors.name}</p>}
                    
                    <input type="email" name="email" placeholder="Tu Email" value={formData.email} onChange={handleChange} required className="w-full p-3 rounded-lg mb-2 text-gray-800 border-2 border-transparent focus:ring-2 focus:ring-blue-500 outline-none" aria-label="Correo Electrónico" />
                    {errors.email && <p className="text-red-300 text-sm text-left mb-2">{errors.email}</p>}
                    
                    <textarea name="message" rows={4} placeholder="¿Qué necesitas? (Landing, Automatización)" value={formData.message} onChange={handleChange} required className="w-full p-3 rounded-lg mb-2 text-gray-800 border-2 border-transparent focus:ring-2 focus:ring-blue-500 outline-none" aria-label="Mensaje"></textarea>
                    {errors.message && <p className="text-red-300 text-sm text-left mb-2">{errors.message}</p>}
                </Form>
            </div>
            <p className="mt-16 text-lg">O contáctanos directamente: <a href="https://wa.me/16043799516" className="underline hover:text-yellow-400" target="_blank" rel="noopener noreferrer">WhatsApp</a> | <a href="mailto:hola@vancouverlandings.com" className="underline hover:text-yellow-400">hola@vancouverlandings.com</a></p>
        </AnimatedSection>
    );
};

export default Contact;
