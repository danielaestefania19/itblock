import bgweb3 from '../assets/bgweb3.png';

const Future = () => {
    return (
        <div className="relative text-white h-[90vh] flex items-center justify-start pl-8 md:pl-20">
            <img
                src={bgweb3}
                alt="Overlay Image"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: 'top' }}
            />
            <div className="relative z-10 text-left max-w-screen-xl ml-48">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-[55px] font-interTight -mb-6">Filosofía</h1>
                    <h1 className="text-[55px] font-interTight mb-4">& Visión.</h1>
                    <h2 className="text-[24px] font-interTight font-normal mb-8">En este momento, nos encontramos en el amanecer de una nueva era y sabemos que tú también sientes este cambio de paradigma. Por eso estás aquí.</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <p className="hover:text-white text-[16px] font-inter font-light">
                                Los creadores de cambios del futuro quieren ser dueños de sus identidades, información y fondos, y reconstruir los sistemas rotos del presente.

                                En ItBlock, creemos que el ecosistema descentralizado está devolviendo el poder a las personas, con la Web 3 como piedra angular para el cambio.

                                Estamos reuniendo proyectos de alta calidad que comparten nuestros valores fundamentales: los audaces, los valientes y aquellos que no están interesados en ser otra réplica de algo que ya existe.
                            </p>
                        </div>
                        <div>
                            <p className="hover:text-white text-[16px] font-inter font-light">
                                La historia recuerda a los audaces y, mientras nos encontramos al borde del precipicio del cambio, las empresas que mantienen el rumbo son las que están comprometidas con su visión y tienen un camino claro hacia adelante.

                                ItBlock es tu socio experto en este viaje: creemos en las mismas cosas. Nos preocupamos por las mismas cosas. Estamos del mismo lado.

                                Únete a nosotros en la vanguardia de la Web 3.</p>
                        </div>
                    </div>

                    <div className="text-left mt-8">
                        <button
                            type="submit"
                            className="w-full max-w-[180px] h-14 mt-2 border border-white bg-black text-white py-2 rounded-xl hover:bg-[#04BFAD] hover:text-black hover:border-none transition"
                        >
                            Ponte en Contacto
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Future;