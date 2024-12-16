import { useState } from 'react';
import desarrolloweb from '../assets/desarrolloweb.png'; // Ajusta las imágenes según sea necesario

const Services = () => {
  return (
    <div className="relative bg-white text-white py-16">
      <h2 className="text-4xl text-black text-center mb-10 font-machina">Nuestros Servicios</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-16 max-w-screen-2xl mx-auto"> {/* Espacio entre tarjetas y 3 columnas en pantallas medianas, centrado */}
        
        <div className="bg-black p-6 rounded-lg shadow-lg h-80"> {/* Ajusta la altura aquí */}
          <img src={desarrolloweb} alt="Desarrollo de Sitios Web" className="h-32 w-32 m-8 rounded-md mb-4" />
          <h3 className="text-2xl font-bold mb-2">Desarrollo de Sitios Web</h3>
          <p>Creación de sitios web responsivos y optimizados que ofrecen una experiencia de usuario excepcional.</p>
        </div>

        <div className="bg-black p-6 rounded-lg shadow-lg h-96">
          <img src={desarrolloweb} alt="Desarrollo de Aplicaciones Web" className="h-32 w-32 rounded-md mb-4" />
          <h3 className="text-2xl font-bold mb-2">Desarrollo de Aplicaciones Web</h3>
          <p>Nuestras aplicaciones web son interactivas y escalables, diseñadas para mejorar la productividad y facilitar la comunicación.</p>
        </div>

        <div className="bg-black p-6 rounded-lg shadow-lg h-96">
          <img src={desarrolloweb} alt="E-commerce" className="h-32 w-32 rounded-md mb-4" />
          <h3 className="text-2xl font-bold mb-2">E-commerce</h3>
          <p>Desarrollamos tiendas en línea personalizadas que no solo son atractivas, sino también funcionales.</p>
        </div>

        <div className="bg-black p-6 rounded-lg shadow-lg h-96">
          <img src={desarrolloweb} alt="Desarrollo de DApps" className="h-32 w-32 rounded-md mb-4" />
          <h3 className="text-2xl font-bold mb-2">Desarrollo de DApps</h3>
          <p>Construimos aplicaciones descentralizadas que aprovechan la tecnología blockchain para proporcionar soluciones seguras y transparentes.</p>
        </div>

        <div className="bg-black p-6 rounded-lg shadow-lg h-96">
          <img src={desarrolloweb} alt="Creación de Smart Contracts" className="h-32 w-32 rounded-md mb-4" />
          <h3 className="text-2xl font-bold mb-2">Creación de Smart Contracts</h3>
          <p>Desarrollamos smart contracts a medida que automatizan procesos y garantizan transacciones seguras y eficientes.</p>
        </div>

        <div className="bg-black p-6 rounded-lg shadow-lg h-96">
          <img src={desarrolloweb} alt="Consultoría en Blockchain" className="h-32 w-32 rounded-md mb-4" />
          <h3 className="text-2xl font-bold mb-2">Consultoría en Blockchain</h3>
          <p>Ofrecemos consultoría experta para ayudar a tu empresa a comprender y adoptar la tecnología blockchain.</p>
        </div>

      </div>
    </div>
  );
};

export default Services;
