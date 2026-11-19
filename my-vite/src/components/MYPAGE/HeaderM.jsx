import React from 'react'

const HeaderM = ({theme,handleTheme,texts,handleLanguage,auth,handleAuth}) => {
  return (
    <header className= {theme}>
        <h2>{texts.headerTitle}</h2>
         <h3>{texts.headerSubTitle}</h3>
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

export default HeaderM