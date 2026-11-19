import { createContext, useState } from "react";

const LanguageContext = createContext();

const initialLanguage = "es"

const translations = {
    es: {
        headerTitle: "Mi aplicacion SIN Context Api",
        headerSubtitle: "Mi Cabecera",
        headerLight: "Claro",
        headerDark: "Oscuro",
        buttonLogin: "Iniciar Sesion",
        buttonLogout: "Cerrar Sesion",
        mainWelcome: "Bienvenido",
        mainHello: "Hola usuario",
        mainContent: "Mi contenido principal",
        footerTitle: "Mi pie de pagina"
    },
    en: {
            headerTitle: "My application WITHOUT Context Api",
            headerSubtitle: "My Header",
            headerLight: "Sure",
            headerDark: "Dark",
            buttonLogin: "Login",
            buttonLogout: "Close Session",
            mainWelcome: "Welcome",
            mainHello: "Hello user",
            mainContent: "My main content",
            footerTitle: "My footer"
        }, 
}

const LanguageProvider = ({children}) =>{
    
    const [language, setlanguage] = useState(initialLanguage)
    const [texts, settexts] = useState(translations[language])
    
    const handleLanguage = (e) => {
    if (e.target.value === "es") {
      setlanguage("es");
      settexts(translations.es);
    } else {
      setlanguage("en");
      settexts(translations.en);
    }
  }



    const data = {
        texts, handleLanguage
    }


    return <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
}
export {LanguageProvider};

export default LanguageContext