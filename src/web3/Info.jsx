import development from '../assets/development-1.svg'
import users from '../assets/users.svg'
import beenhere from '../assets/beenhere.svg'
import BgInfo from '../assets/BgInfo.png'

const Info = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat py-4 px-8"
      style={{ backgroundImage: `url(${BgInfo})` }}
    >

      <div className=" py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-[40px] font-interTight font-bold mb-4 leading-none tracking-[0.10px]">
            <span className="block">Desarrollo de Proyectos</span>
            <span className="block">Blockchain a medida</span>
          </h2>
          <p className="text-center text-[19px] font-interTight font-normal mb-12">
            <span className="block">
              Desarrollamos soluciones Blockchain escalables, basándonos en la
            </span>
            <span className="block">
              experiencia de usuario y smart contracts eficientes
            </span>
          </p>

          {/* Tarjetas de características */}
          <div className="flex flex-wrap justify-center mx-8">
            {/* Tarjeta 1 */}
            <div className="bg-[#F4F6F8] w-[340px] min-h-[340px] p-8 rounded-lg shadow-lg mx-6 my-4">
              <div className="flex ml-3 mt-5 mb-5">
                <img className="w-8" src={development} alt="" />
              </div>
              <h2 className="ml-3 text-[26px] font-inter font-semibold mb-5 leading-none tracking-[-0.7px] [transform:scaleY(1.1)]">
                Desarrollo 100% <br /> In-House
              </h2>
              <p className=" ml-3 text-gray-800  text-[18px] mb-10 font-inter tracking-[-0.7px] font-normal">
              Destacamos por ofrecer desarrollos a medida, ejecutados íntegramente por nuestro equipo interno, asegurando un control total de calidad y plazos.
              </p>
            </div>

            <div className="bg-[#F4F6F8] w-[340px] min-h-[340px] p-8 rounded-lg shadow-lg mx-6 my-4">
              <div className="flex ml-3 mt-5 mb-5">
                <img className="w-8" src={users} alt="" />
              </div>
              <h2 className="ml-3 text-[26px] font-inter font-semibold mb-5 leading-none tracking-[-0.7px] [transform:scaleY(1.1)]">
                Desarrollo 100% <br /> In-House
              </h2>
              <p className=" ml-3  text-gray-800 text-[18px] mb-10 font-inter tracking-[-0.7px] font-normañ">
              No somos una empresa convencional; nos convertimos en tus partners tecnológicos, alineando objetivos para lograr resultados destacados.
               </p>
            </div>

            {/* Tarjeta 3 */}
            <div className="bg-[#F4F6F8] w-[340px] min-h-[340px] p-8 rounded-lg shadow-lg mx-6 my-4">
              <div className="flex ml-3 mt-5 mb-5">
                <img className="w-8" src={beenhere} alt="" />
              </div>
              <h2 className="ml-3 text-[26px] font-inter font-semibold mb-5 leading-none tracking-[-0.7px] [transform:scaleY(1.1)]">
                Desarrollo 100% <br /> In-House
              </h2>
              <p className=" ml-3  text-gray-800 text-[18px] mb-10 font-inter tracking-[-0.7px] font-normal">
              Adoptamos un enfoque riguroso en cumplimiento regulatorio, adaptando la tecnología a normativas y estándares legales, para ahorrarte preocupaciones.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Info;