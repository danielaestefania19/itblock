import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white py-10">
            <div className="max-w-[1250px] mx-auto px-4 flex flex-col"> {/* Cambiar a max-w-screen-lg para un ancho mayor */}
                {/* Fila Superior */}
                <div className="flex justify-between mb-8"> 
                    {/* Nombre de la Empresa (Izquierda) */}
                    <div className="flex items-center">
                        <h2 className="text-4xl font-bold text-black">itblock</h2>
                    </div> 
                    {/* Navegación Principal (Derecha) */}
                    <nav className="flex flex-col mr-52 font-dosis text-[18px]"> 
                        <a href="#" className="text-black hover:text-black mb-1">About</a>
                        <a href="#" className="text-black hover:text-black mb-1">Who</a>
                        <a href="#" className="text-black hover:text-black mb-1">What We Do</a>
                        <a href="#" className="text-black hover:text-black mb-1">Portfolio</a>
                        <a href="#" className="text-black hover:text-black mb-1">Contact Us</a>
                    </nav>
                </div>

                {/* Línea Negra */}
                <div className="border-t border-black w-full my-8"></div> 

                {/* Fila Inferior */}
                <div className="flex justify-between mb-16 mt-4">
                    {/* Navegación de Políticas (Izquierda) */}
                    <nav className="flex flex-col items-start font-karma">
                        <a href="#" className="text-black hover:text-black mb-1">Terms and Conditions</a>
                        <a href="#" className="text-black hover:text-black mb-1">Privacy Policy</a>
                        <a href="#" className="text-black hover:text-black mb-1">Cookie Policy</a>
                        <a href="#" className="text-black hover:text-black mb-1">Acceptable Use</a>
                    </nav>
                    {/* Derechos de Autor (Derecha) */}
                    <div className="flex flex-col mr-12"> 
                        <p className="text-black text-sm mb-1">&copy; 2024. Todos los derechos reservados.</p>
                        <p className="text-black text-sm">Diseño: Never Know Defeat</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
