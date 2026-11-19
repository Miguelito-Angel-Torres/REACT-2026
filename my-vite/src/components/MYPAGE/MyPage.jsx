import React, { useState } from 'react'
import HeaderM from './HeaderM'
import MainM from './MainM'
import FooterM from './FooterM'


const initialTheme = "light"


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

const initialAuth = null

function MyPage() {
    const [theme, settheme] = useState(initialTheme)
    const [language, setlanguage] = useState(initialLanguage)
    const [texts, settexts] = useState(translations[language])
    const [auth, setauth] = useState(initialAuth)

    const handleTheme = (e) => {
        if(e.target.value ==="light"){
            settheme("ligth")
        }else
            settheme("dark")
    }

    const handleLanguage = (e) => {
    if (e.target.value === "es") {
      setlanguage("es");
      settexts(translations.es);
    } else {
      setlanguage("en");
      settexts(translations.en);
    }
  };

  const handleAuth = (e) =>{
    if(auth){
        setauth(null)
    }else{
        setauth(true)
    }
  }


  return (
    <div className="my-page">
        <HeaderM theme = {theme} handleTheme={handleTheme} 
        texts={texts} handleLanguage ={handleLanguage} 
        auth = {auth}
        handleAuth = {handleAuth}
        ></HeaderM>
        <MainM theme = {theme} texts={texts}
        auth = {auth}></MainM>
        <FooterM theme = {theme} texts={texts}></FooterM>
        
    </div>
  )
}

export default MyPage