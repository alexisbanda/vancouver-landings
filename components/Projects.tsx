
import React from 'react';
import AnimatedSection from './AnimatedSection';

interface ProjectCardProps {
    imgSrc: string;
    alt: string;
    title: string;
    description: string;
    features: string[];
    link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imgSrc, alt, title, description, features, link }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <img src={imgSrc} alt={alt} loading="lazy" className="rounded-lg aspect-[5/4] object-cover" />
        <h3 className="text-xl font-bold mt-4 text-blue-800">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <ul className="text-left mt-4 text-sm text-gray-600 list-disc list-inside space-y-1">
            {features.map((feature, index) => <li key={index}>{feature}</li>)}
        </ul>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mt-2 inline-block transition-transform transform hover:scale-105">Ver Ejemplo</a>
    </div>
);


const Projects: React.FC = () => {
    const scrollToSection = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    const projectsData = [
        {
            imgSrc: "https://res.cloudinary.com/dvm4ql8eo/image/upload/c_fill,w_500,h_400/v1740774540/Screenshot_from_2025-02-28_12-11-53_zjeftp.png",
            alt: "Landing para Freelancer",
            title: "🎨 Freelancer / Consultor",
            description: "Convierte visitantes en clientes con una landing optimizada.",
            features: ["Portafolio visual y profesional.", "Formulario de contacto eficiente.", "SEO optimizado para atraer tráfico."],
            link: "https://freelancer-landing.netlify.app"
        },
        {
            imgSrc: "https://res.cloudinary.com/dvm4ql8eo/image/upload/c_fill,w_500,h_400/v1740774563/Screenshot_from_2025-02-28_12-11-05_v4anpr.png",
            alt: "Landing para Tienda Ecommerce",
            title: "🛍️ Tienda Ecommerce",
            description: "Convierte tráfico en ventas con una experiencia de compra optimizada.",
            features: ["Galería interactiva de productos.", "Integración con Redes Sociales.", "Estrategia de conversión efectiva."],
            link: "https://billybon-detalles.netlify.app"
        },
        {
            imgSrc: "https://res.cloudinary.com/dvm4ql8eo/image/upload/c_fill,w_500,h_400/v1740964439/Screenshot_from_2025-03-02_17-11-41_gybn6a.png",
            alt: "Landing para Negocio Local",
            title: "🏪 Negocio Local",
            description: "Aumenta la visibilidad y las reservas con una web de alto impacto.",
            features: ["Google Maps y ubicación destacada.", "Botón de reserva rápida.", "Testimonios y reseñas en vivo."],
            link: "https://vancouver-coffee-landing.netlify.app"
        }
    ];

    return (
        <AnimatedSection id="ejemplos" className="py-16 text-center bg-white">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-4">
                🚀 Nuestros Proyectos en Acción
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                Cada negocio es único, por eso creamos soluciones diseñadas para vender más y captar clientes de manera efectiva.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 sm:px-6">
                {projectsData.map((project, index) => <ProjectCard key={index} {...project} />)}
            </div>

            <div className="mt-12">
                <h3 className="text-2xl font-bold text-blue-800 mb-2">
                    ¿Quieres una landing poderosa para tu negocio?
                </h3>
                <p className="text-lg text-gray-600 mb-4">
                    💡 Cuéntanos tu idea y te entregamos una web lista para vender en 24h.
                </p>
                <button onClick={() => scrollToSection('contacto')} className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-transform transform hover:scale-105 hover:bg-blue-500">
                    ¡Hablemos Ahora!
                </button>
            </div>
        </AnimatedSection>
    );
};

export default Projects;
