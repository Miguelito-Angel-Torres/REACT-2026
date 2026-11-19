import { useContext } from 'react';
import ThemeContext from './CONTEXT/ThemeContext';
import LanguageContext from './CONTEXT/LanguageContext';
import AuthContext from './CONTEXT/AuthContext';

const HeaderMContext = () => {
  // Lo va contener de un contexto
  const {theme,handleTheme} = useContext(ThemeContext)
  const {texts,handleLanguage} = useContext(LanguageContext)
  const {auth,handleAuth} = useContext(AuthContext)
  return (
    <header className= {theme}>
        <h2>{texts.headerTitle}</h2>  
         <h3>{texts.headerSubtitle}</h3>
        <select name="language" onChange={handleLanguage} >
          <option value="es">ES</option>
          <option value="en">EN</option>
        </select>
      <input type="radio" name="theme" id="light" value = "light"
      onClick={handleTheme} />
      <label htmlFor="ligth">Claro</label>
      <input type="radio" name="theme" id="dark" value = "dark"
      onClick={handleTheme} />
      <label htmlFor="dark">Oscuro</label>
      <br />
      <button onClick={handleAuth}>
        {auth ? "Cerrar Sesión" : "Iniciar Sesión"}
        
        </button>
    </header>
  )
}

export default HeaderMContext