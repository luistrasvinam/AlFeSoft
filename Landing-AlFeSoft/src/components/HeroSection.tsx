import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-blue-500 text-white h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Crea Tu Sitio Web Con Nosotros</h2>
        <p className="mb-8">Ofrecemos servicios profesionales de desarrollo web a medida.</p>
        <a href="#contact" className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold">Solicita una Cotización</a>
      </div>
    </section>
  );
};

export default HeroSection;
