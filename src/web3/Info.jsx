import development from '../assets/development-1.svg'
import users from '../assets/users.svg'
import beenhere from '../assets/beenhere.svg'

const Info = () => {
  return (
    <div className="bg-white py-16 px-8">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-center text-[40px] font-interTight font-bold mb-4 leading-none tracking-[-0.7px]">
      <span className="block">Desarrollo de Proyectos</span>
      <span className="block">Blockchain a medida</span>
    </h2>
    <p className="text-center text-[19px] font-interTight font-normal mb-12">
      <span className="block">Desarrollamos soluciones Blockchain escalables, basándonos en la </span>
      <span className="block">experiencia de usuario y smart contracts eficientes</span>
    </p>

    {/* Tarjetas de características */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Tarjeta 1 */}
      <div className="bg-[#F4F6F8] p-6 rounded-lg shadow-lg">
        <div className="flex mt-3 mb-4 ml-2">
          <img className="w-8" src={development} alt="" />
        </div>
        <h2 className="ml-2 text-[28px] font-inter font-semibold mb-4 leading-none tracking-[-0.7px] [transform:scaleY(1.1)]">
          Desarrollo 100% <br /> In-House
        </h2>
        <p className="ml-2 text-[16px] mb-8 font-inter tracking-[-0.7px] font-light">
          Destacamos por ofrecer desarrollos a medida, ejecutados por nuestro equipo interno sin recurrir a subcontrataciones ni en la búsqueda de la eficiencia en costos.
        </p>
      </div>

      {/* Tarjeta 2 */}
      <div className="bg-[#F4F6F8] p-6 rounded-lg shadow-lg">
        <div className="flex mt-3 mb-4 ml-2">
          <img className="w-8" src={users} alt="" />
        </div>
        <h2 className="ml-2 text-[28px] font-inter font-semibold mb-4 leading-none tracking-[-0.7px] [transform:scaleY(1.1)]">
          Somos tu Partner Tecnológico
        </h2>
        <p className="ml-2 text-[16px] mb-8 font-inter tracking-[-0.7px] font-light">
          No somos una empresa común de desarrollo, nos asociamos contigo como partners tecnológicos, alineando objetivos para lograr mejores resultados.
        </p>
      </div>

      {/* Tarjeta 3 */}
      <div className="bg-[#F4F6F8] p-6 rounded-lg shadow-lg">
        <div className="flex mt-3 mb-4 ml-2">
          <img className="w-8" src={beenhere} alt="" />
        </div>
        <h2 className="ml-2 text-[28px] font-inter font-semibold mb-4 leading-none tracking-[-0.7px] [transform:scaleY(1.1)]">
          Cumplimiento Regulatorio
        </h2>
        <p className="ml-2 text-[16px] mb-8 font-inter tracking-[-0.7px] font-light">
          Adoptamos un enfoque riguroso en cumplimiento regulatorio, adaptando la tecnología a normativas y estándares legales, para ahorrarte preocupaciones.
        </p>
      </div>
    </div>
  </div>
</div>

  );
};

export default Info;

