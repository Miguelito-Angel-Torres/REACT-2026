import { useContext } from 'react';
import ThemeContext from './CONTEXT/ThemeContext';
import AuthContext from './CONTEXT/AuthContext';

const MainMContext = () => {
  const { theme } = useContext(ThemeContext);
  const {auth} = useContext(AuthContext)

  return (
    <main className={theme}>
      {auth ? <p>Hola usuari@</p> : <p>Bienvenid@ invitad@</p>}

      <p>Mi contenido Principal</p>
    </main>
  );
};

export default MainMContext;