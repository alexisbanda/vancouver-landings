
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useOnScreen } from '../hooks/useOnScreen';

// 1. The card is now a motion component and receives variants
const AdvantageCard: React.FC<{ icon: string; title: string; text: string; color: string; bgColor: string; }> = ({ icon, title, text, color, bgColor }) => (
  <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
    <div className={`w-16 h-16 mx-auto mb-4 ${bgColor} ${color} flex items-center justify-center rounded-full text-3xl flex-shrink-0`}>
      {icon}
    </div>
    <h3 className={`text-xl font-bold ${color}`}>{title}</h3>
    <p className="text-gray-600 mt-2 flex-grow">{text}</p>
  </div>
);

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1, // This will delay each child's animation
    },
  },
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 14,
    },
  },
};

const Advantages: React.FC = () => {
    const scrollToSection = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    const ref = useRef<HTMLDivElement>(null);
    const isOnScreen = useOnScreen(ref, '-150px');

    const advantages = [
        { icon: '🚀', title: 'Entrega en 24-48h', text: 'No esperes semanas. Tu sitio estará listo y funcionando en menos de 2 días.', color: 'text-blue-800', bgColor: 'bg-blue-100' },
        { icon: '🎨', title: 'Diseño Atractivo', text: 'Tu negocio se verá profesional, moderno y confiable, generando más ventas.', color: 'text-green-800', bgColor: 'bg-green-100' },
        { icon: '📈', title: 'Maximiza Ventas', text: 'Cada landing está optimizada para convertir visitantes en clientes.', color: 'text-yellow-800', bgColor: 'bg-yellow-100' },
        { icon: '🤖', title: 'Automatización', text: 'Ahorra tiempo con respuestas automáticas y captación de clientes 24/7.', color: 'text-purple-800', bgColor: 'bg-purple-100' },
        { icon: '🔗', title: 'Integraciones Simples', text: 'Conéctalo con WhatsApp, Google Forms, Mailchimp y más sin complicaciones.', color: 'text-red-800', bgColor: 'bg-red-100' },
        { icon: '💰', title: 'Precios Claros y Fijos', text: 'Sin pagos mensuales ocultos. Pagas una vez y es tuyo para siempre.', color: 'text-teal-800', bgColor: 'bg-teal-100' },
    ];

    return (
        <section id="ventajas" className="py-16 bg-white text-center" ref={ref}>
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-4">¿Por qué elegirnos? 💡</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                No solo creamos páginas web. Te ayudamos a <strong>atraer clientes, automatizar procesos y vender más</strong> sin esfuerzo.
            </p>
            {/* 2. The grid is now a motion component with the container variants */}
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 sm:px-6"
                variants={containerVariants}
                initial="hidden"
                animate={isOnScreen ? 'visible' : 'hidden'}
            >
                {advantages.map((adv, index) => (
                    // 3. Each card is a motion component with the card variants
                    <motion.div key={index} variants={cardVariants}>
                        <AdvantageCard {...adv} />
                    </motion.div>
                ))}
            </motion.div>
            <div className="mt-12">
                <button onClick={() => scrollToSection('precios')} className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-transform transform hover:scale-105 hover:bg-blue-500">
                    📌 Ver Planes Ahora
                </button>
            </div>
        </section>
    );
};

export default Advantages;
