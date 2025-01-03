import ethereum from '../assets/ethereum.png'; // Ruta de las imágenes
import icp from '../assets/icp.png';
import rootstock from '../assets/rootstock.png';
import polygon from '../assets/polygon.png';
import avalanche from '../assets/avalanche.png';

const BlockchainNetworks = () => {
  return (
    <div className="bg-white py-16 px-32">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Sección izquierda: Título y botón */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-4xl font-bold font-interTight leading-none tracking-[0.10px] text-black mb-4">
            Desarrollamos en múltiples redes Blockchain
          </h2>
          <button className="bg-[#038C73] text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-[#02735E] transition">
            Cuéntanos tu proyecto
          </button>
        </div>
        {/* Sección derecha: Texto descriptivo */}
        <div className="md:w-1/2  text-gray-800 text-[18px] mb-2 font-inter tracking-[-0.7px] font-normal">
          <p>
            Desarrollamos soluciones en múltiples redes blockchain, brindando la
            flexibilidad necesaria para adaptarnos a las particularidades de
            cada proyecto. Ya sea que busques escalabilidad, interoperabilidad
            o características específicas de una red, nuestro enfoque garantiza
            un rendimiento óptimo.
          </p>
        </div>
      </div>
      {/* Tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mt-12">
        {/* Tarjeta 1 */}
        <div className="bg-black text-white rounded-lg shadow-lg p-2 flex flex-col items-center h-[330px] relative" style={{ backgroundImage: `url(${ethereum})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute bottom-0 w-full text-center p-2">
            <p className="text-2xl font-bold text-white">Ethereum</p>
          </div>
        </div>
        {/* Tarjeta 2 */}
        <div className="bg-black text-white rounded-lg shadow-lg p-2 flex flex-col items-center h-[330px] relative" style={{ backgroundImage: `url(${icp})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute bottom-0 w-full text-center p-2">
            <p className="text-2xl font-bold text-white">Internet Computer</p>
          </div>
        </div>
        {/* Tarjeta 3 */}
        <div className="bg-black text-white rounded-lg shadow-lg p-2 flex flex-col items-center h-[330px] relative" style={{ backgroundImage: `url(${rootstock})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute bottom-0 w-full text-center p-2">
            <p className="text-2xl font-bold text-white">Rootstock</p>
          </div>
        </div>
        {/* Tarjeta 4 */}
        <div className="bg-black text-white rounded-lg shadow-lg p-2 flex flex-col items-center h-[330px] relative" style={{ backgroundImage: `url(${polygon})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute bottom-0 w-full  text-center p-2">
            <p className="text-2xl font-bold text-white">Polygon</p>
          </div>
        </div>

        {/* Tarjeta 5 */}
        <div className="bg-black text-white rounded-lg shadow-lg p-2 flex flex-col items-center h-[330px] relative" style={{ backgroundImage: `url(${avalanche})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute bottom-0 w-full text-center p-2">
            <p className="text-2xl font-bold text-white">Avalanche</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainNetworks;
