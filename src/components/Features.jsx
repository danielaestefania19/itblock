const Features = () => {
  return (
    <div className="bg-black text-white flex items-center justify-center p-24">
      <div className="w-full max-w-7xl">
      <h1 className="text-5xl font-bold  font-karma mb-6">Hola.<br />Somos lo que estabas <br /> buscando.</h1>
      <h2 className="text-2xl font-semibold font-karma mb-4">¿Quiénes somos?</h2>
      <h3 className="text-5xl text-[#06d6a0] font-karma font-bold mb-12">Somos itblock.</h3>

      <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="lg:w-1/3">
          <h6 className="mb-4">01/</h6>
          <h3 className="text-[#04BFAD] text-[50px] mb-8">Valor</h3 >
          <p className="text-[18px] leading-relaxed">
            Invertimos y apoyamos los proyectos que construyen colectivamente los sistemas que cambian las normas financieras y sociales. 
            Nuestro enfoque es el futuro descentralizado a través de DeFi, Crypto, Blockchain y Gaming. 
            Nuestro valor único radica en nuestra experiencia práctica, red y fundamentos. 
            Hemos construido negocios exitosos desde cero y trabajamos con algunos de los principales expertos de la industria. 
            Buscamos equipos excepcionales para que coincidan con nuestros fundamentos y construyamos otros nuevos.
          </p>
        </div>

        <div className="lg:w-1/3">
        <h6 className="mb-4">02/</h6>
          <h3 className="text-[#04BFAD] text-[50px] -mb-2">Centro de</h3>
          <h3 className="text-[#04BFAD] text-[50px] mb-8">atención</h3>
          <p className="text-[18px] leading-relaxed">
            En MatterBlock, nuestra lente está finamente afinada: nos centramos en los elementos que importan, los bloques sobre los que se construye el éxito en la industria: 
            distribución y adopción, innovación, tutoría, comunidad, marketing y financiación.
          </p>
        </div>

        <div className="lg:w-1/3">
        <h6 className="mb-4">03/</h6>
          <h3 className="text-[#04BFAD] text-[50px] mb-8">Crecimiento</h3>
          <p className="text-[18px] leading-relaxed">
            Se está tirando mucho dinero, pero se necesita más que dinero para construir el futuro. 
            Para tener éxito en este ecosistema, necesita acceder a una navaja suiza de herramientas, red y exposición. 
            Somos los socios inversores más raros y compartimos este acceso con usted.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Features;
