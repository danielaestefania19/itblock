import bgweb3 from '../assets/bgweb3.png';

const Future = () => {
    return (
        <div className="relative text-white h-screen flex flex-col items-center justify-center">
            <img 
                src={bgweb3} 
                alt="Overlay Image" 
                className="absolute inset-0 w-full h-full object-cover" 
            />
            {/* Contenedor para el texto */}
            <div className="relative z-10 text-center">
                <h1 className="text-sm font-light mb-4">WELCOME TO CRONOS</h1>
                <h2 className="text-6xl font-bold mb-2">The Internet of Blockchains.</h2>
                <p className="text-lg font-light">Cronos is an ever expanding ecosystem of connected apps and services, built for a decentralized future.</p>
            </div>
        </div>
    );
};

export default Future;
