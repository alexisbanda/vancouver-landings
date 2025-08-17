
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Services from './components/Services';
import Advantages from './components/Advantages';
import Testimonials from './components/Testimonials';
import Projects from './components/Projects';
import Pricing from './components/Pricing';
import LeadMagnet from './components/LeadMagnet';
import Resources from './components/Resources';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import WhatsAppButton from './components/WhatsAppButton';
import Popup from './components/Popup';

const App: React.FC = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    const showPopupTimer = setTimeout(() => {
      setIsPopupVisible(true);
    }, 10000); // Show after 10 seconds

    const handleScroll = () => {
      if (window.scrollY > document.body.offsetHeight * 0.5) {
        setIsPopupVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(showPopupTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <Helmet>
        <title>Vancouver Landings | Creamos Landing Pages que Convierten</title>
        <meta
          name="description"
          content="Especialistas en diseño y desarrollo de landing pages en Vancouver. Aumenta tus leads y ventas con una página de aterrizaje profesional, rápida y optimizada para la conversión."
        />
      </Helmet>
      <Navbar />
      <Header />
      <main>
        <Services />
        <Advantages />
        <Testimonials />
        <Projects />
        <Pricing />
        <LeadMagnet />
        <Resources />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTopButton />
      {isPopupVisible && <Popup onClose={() => setIsPopupVisible(false)} />}
    </>
  );
};

export default App;
