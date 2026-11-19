import { useContext } from 'react'
import ThemeContext from './CONTEXT/ThemeContext'

function FooterMContext() {
  const {theme} = useContext(ThemeContext)
  return (
     <footer className={theme} >

       <h4>Mi pie de pagina</h4>      
    </footer>
  )
}

export default FooterMContext