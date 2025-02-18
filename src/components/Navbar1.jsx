import { Link } from "react-router-dom";
import { useState } from "react";
import itblock from '../assets/itblock.png'
import axios from "axios";

const API_KEY = import.meta.env.VITE_GOOGLE_TRANSLATE_API_KEY; // 🔥 Reemplaza con tu clave de Google Cloud Translation API

const Navbar1 = () => {
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

    // Función para hacer scroll al formulario
    const handleScrollToContact = (e) => {
      e.preventDefault();
      const contactSection = document.getElementById("contact-us");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    };

  return (
    <nav className="flex items-center justify-between h-28 p-2 bg-[#020617] text-white font-interTight">
    {/* Logo */}
    <div className="h-full flex items-center">
      <div className="h-24 w-32 overflow-hidden rounded -translate-y-8">
        <img
          src={itblock}
          alt="Beta Now Live!"
          className="w-36 h-36 object-cover object-[center_top]"
        />
      </div>
    </div>
  
    {/* Enlaces de la Navbar */}
    <div className="flex space-x-6 h-full items-center">
      <Link to="/" className="hover:text-white text-[16px] font-interTight font-normal">About</Link>
      <Link to="#who" className="hover:text-white text-[16px] font-interTight font-normal">Who</Link>
      <Link to="#what-we-do" className="hover:text-white text-[16px] font-interTight font-normal">What We Do</Link>
      <Link to="/web3" className="hover:text-white text-[16px] font-interTight font-normal">Web3</Link>
      <a href="#contact-us" onClick={handleScrollToContact} className="hover:text-white text-[16px] font-interTight font-normal">Contact Us</a>
    </div>
  
    {/* Botón para traducir */}
    <div className="h-full flex items-center">
      <button
        onClick={translatePage}
        className="ml-4 px-4 py-2 bg-[#038C73] text-white rounded-lg shadow hover:bg-[#014034]"
      >
        {language === "es" ? "Translate to English" : "Traducir a Español"}
      </button>
    </div>
  </nav>
  

  );
};


export default Navbar1;