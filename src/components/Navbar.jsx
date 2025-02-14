import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_GOOGLE_TRANSLATE_API_KEY; // 🔥 Reemplaza con tu clave de Google Cloud Translation API

const Navbar = () => {
  const [language, setLanguage] = useState("es"); // Estado para manejar el idioma

  // Función para traducir el contenido de la página sin perder estilos
  const translatePage = async () => {
    // Obtener solo los elementos con texto dentro de la página
    const elements = document.querySelectorAll("*:not(script):not(style):not(meta):not(link)"); 

    // Recorrer cada elemento y traducirlo dinámicamente
    elements.forEach(async (element) => {
      if (element.childNodes.length === 1 && element.childNodes[0].nodeType === 3) {
        const originalText = element.innerText; // Captura el texto del elemento

        try {
          const response = await axios.post(
            `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
            {
              q: originalText, // Enviar el texto original a traducir
              target: language === "es" ? "en" : "es", // Cambiar idioma dinámicamente
              format: "text",
            }
          );

          const translatedText = response.data.data.translations[0].translatedText;
          element.innerText = translatedText; // Reemplazar con la traducción
        } catch (error) {
          console.error("Error al traducir:", error);
        }
      }
    });

    // Cambiar el estado del idioma
    setLanguage(language === "es" ? "en" : "es");
  };

  return (
    <nav className="flex items-center justify-between p-6 bg-[#020617] text-white font-interTight">
      <div className="text-3xl font-bold">
        <span className="border-b-2 border-white pb-0">itblock</span>
      </div>

      {/* Enlaces de la Navbar */}
      <div className="flex space-x-6">
        <Link to="/" className="hover:text-white text-[16px] font-interTight font-normal">About</Link>
        <Link to="#who" className="hover:text-white text-[16px] font-interTight font-normal">Who</Link>
        <Link to="#what-we-do" className="hover:text-white text-[16px] font-interTight font-normal">What We Do</Link>
        <Link to="/web3" className="hover:text-white text-[16px] font-interTight font-normal">Web3</Link>
        <Link to="#contact-us" className="hover:text-white text-[16px] font-interTight font-normal">Contact  Us</Link>
      </div>

      {/* Botón para traducir toda la página */}
      <button
        onClick={translatePage}
        className="ml-4 px-4 py-2 bg-[#038C73] text-white rounded-lg shadow hover:bg-[#014034]"
      >
        {language === "es" ? "Translate to English" : "Traducir a Español"}
      </button>
    </nav>
  );
};


export default Navbar;