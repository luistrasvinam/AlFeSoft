import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">AlFeSoft</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#services" className="hover:underline">Servicios</a></li>
            <li><a href="#portfolio" className="hover:underline">Portafolio</a></li>
            <li><a href="#contact" className="hover:underline">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
