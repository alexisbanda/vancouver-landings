
import React from 'react';
import AnimatedSection from './AnimatedSection';

const TestimonialCard: React.FC<{ imgSrc: string; alt: string; text: string; author: string; }> = ({ imgSrc, alt, text, author }) => (
  <div className="p-6 bg-white rounded-lg shadow-md">
    <img src={imgSrc} alt={alt} className="w-16 h-16 mx-auto mb-4 rounded-full" loading="lazy" />
    <p className="text-gray-600">"{text}"</p>
    <p className="mt-2 text-sm font-semibold text-blue-800">- {author}</p>
  </div>
);

const Testimonials: React.FC = () => {
  const testimonials = [
    { imgSrc: 'https://res.cloudinary.com/dvm4ql8eo/image/upload/t_Profile/v1740773205/image_2_hiqxac.png', alt: 'Logo de Food Truck', text: 'Aumentamos un 40% las reservas con nuestro nuevo bot.', author: 'Food Truck' },
    { imgSrc: 'https://res.cloudinary.com/dvm4ql8eo/image/upload/t_Profile/v1740773204/image_11_vpnw7c.png', alt: 'Logo de Freelancer Local', text: 'La landing captó 20 clientes en la primera semana.', author: 'Freelancer Local' },
    { imgSrc: 'https://res.cloudinary.com/dvm4ql8eo/image/upload/t_Profile/v1740773204/image_9_r6ftw6.png', alt: 'Logo de Tienda Local', text: 'Ventas online duplicadas con el sitio.', author: 'Tienda Local' },
  ];

  return (
    <AnimatedSection id="testimonios" className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-800" style={{ fontSize: 'clamp(2rem, 4vw, 4rem)' }}>Lo que Dicen Nuestros Clientes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto px-4 sm:px-6">
        {testimonials.map((testimonial, index) => <TestimonialCard key={index} {...testimonial} />)}
      </div>
    </AnimatedSection>
  );
};

export default Testimonials;
