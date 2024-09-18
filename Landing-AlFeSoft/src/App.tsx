import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Servicios';
import ContactForm from './components/Contacto';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Services />
      <ContactForm />
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 Mi Empresa. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
