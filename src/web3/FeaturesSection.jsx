import bgweb3 from '../assets/bgcard.png'
import bgweb2 from '../assets/bgcard2.png'
import { FiShield, FiLayout, FiTrendingUp, FiFileText } from 'react-icons/fi';

function FeaturesSection() {
  return (
    <section className="py-12 bg-[#020617] text-white">
      <h2 className="text-center text-7xl md:text-7xl font-bold font-machina mb-8">FEATURES AND BENEFITS</h2>

      {/* Contenedor de la cuadrícula desplazado a la derecha */}
      <div className="relative  flex justify-center">
        <div className="relative w-3/4 left-52 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Card 1 */}
          <div className="p-6 rounded-lg shadow-lg text-white h-80 bg-black"
            style={{
              backgroundImage: `url(${bgweb3})`, // Usa la imagen de fondo
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}
          >

            <div className="text-3xl mb-4"><FiLayout /></div>
            <h3 className="text-2xl font-bold mb-2">User-Friendly Interface</h3>
            <p className="text-base">Navigate our intuitive platform with ease, whether youre a seasoned trader or a newcomer.</p>
          </div>

          {/* Card 2 - Más ancha (col-span-2) */}
          <div className="bg-gradient-to-r from-orange-600 to-red-600 p-6 rounded-lg shadow-lg text-white md:col-span-2 bg-black"
            style={{
              backgroundImage: `url(${bgweb2})`, // Usa la imagen de fondo
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}
          >
            <div className="text-3xl mb-4"><FiShield /></div>
            <h3 className="text-2xl font-bold mb-2">Advanced Security</h3>
            <p className="text-base">Your assets are protected with top-tier security protocols, including multi-factor authentication and cold storage.</p>
          </div>

          {/* Card 3 - Más ancha (col-span-2) */}
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 p-6 rounded-lg shadow-lg text-white md:col-span-2 h-80 bg-black"
            style={{
              backgroundImage: `url(${bgweb2})`, // Usa la imagen de fondo
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}
          >
            <div className="text-3xl mb-4"><FiTrendingUp /></div>
            <h3 className="text-2xl font-bold mb-2">Real-Time Market Data</h3>
            <p className="text-base">Stay ahead with real-time updates and in-depth market analysis.</p>
          </div>

          {/* Card 4 */}
          <div className="p-6 rounded-lg shadow-lg text-white h-80 bg-black"
            style={{
              backgroundImage: `url(${bgweb3})`, // Usa la imagen de fondo
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}
          >
            <div className="text-3xl mb-4"><FiFileText /></div>
            <h3 className="text-2xl font-bold mb-2">Smart Contract Integration</h3>
            <p className="text-base">Leverage the power of smart contracts for secure and transparent transactions.</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
