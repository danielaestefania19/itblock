const Methodology = () => {
    return (
        <div className="bg-white py-16 px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center text-[40px] font-interTight font-bold mb-12 leading-none tracking-[-0.7px]">Nuestra metodología de trabajo</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="relative bg-white p-6">
                        <div className="absolute inset-0 flex items-start justify-end pr-6 -mt-8">
                            <span className="text-[#DFE8ED] text-[180px] font-bold leading-none" style={{ lineHeight: '1' }}>
                                1
                            </span>
                        </div>
                        {/* Contenido principal */}
                        <div className="relative z-10">
                            <p className="text-sm uppercase text-gray-400 font-semibold mb-4">
                                Primer Paso
                            </p>
                            <h2 className="text-[40px] font-interTight font-bold mb-4 leading-none ">
                                Análisis del Proyecto
                            </h2>
                            <p className="text-gray-600 mt-2">
                                Nos sumergimos en tu empresa para comprender a fondo tus objetivos y necesidades.
                            </p>
                        </div>
                    </div>

                    <div className="relative bg-white p-6">
                        {/* Número grande alineado a la derecha */}
                        <div className="absolute inset-0 flex items-start justify-end pr-6 -mt-8">
                            <span className="text-[#DFE8ED] text-[180px] font-bold leading-none" style={{ lineHeight: '1' }}>
                                2
                            </span>
                        </div>
                        {/* Contenido principal */}
                        <div className="relative z-10">
                            <p className="text-sm uppercase text-gray-400 font-semibold mb-2">
                                Segundo paso


                            </p>
                            <h2 className="text-[40px] font-interTight font-bold mb-4 leading-none">
                                Desarrollo a Medida
                            </h2>
                            <p className="text-gray-600 mt-2">
                                Diseñamos y desarrollamos soluciones blockchain personalizadas que se alinean con tus requerimientos específicos</p>
                        </div>
                    </div>

                    <div className="relative bg-white p-6">
                        {/* Número grande alineado a la derecha */}
                        <div className="absolute inset-0 flex items-start justify-end pr-6 -mt-8">
                            <span className="text-[#DFE8ED] text-[180px] font-bold leading-none" style={{ lineHeight: '1' }}>
                                3
                            </span>
                        </div>
                        {/* Contenido principal */}
                        <div className="relative z-10">
                            <p className="text-sm uppercase text-gray-400 font-semibold mb-2">
                                Tercer paso


                            </p>
                            <h2 className="text-[40px] font-interTight font-bold mb-4 leading-none">
                                Soporte <br></br>Continuo
                            </h2>
                            <p className="text-gray-600 mt-2">
                                Ofrecemos un Soporte Continuo y Garantías para asegurar que los desarrollos cumplen exactamente con lo acordado desde el inicio.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Methodology;