import React from 'react'

const MainM = ({theme,auth}) => {
  return (

    <main className={theme}>
      {auth ? <p>Hola usuari@</p>: <p>Bienvenid@ invitad@</p> }

      <p>Mi contenido Principal</p>
    </main>
  )
}

export default MainM