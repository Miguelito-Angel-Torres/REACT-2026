import './App.css'
import Componente from './components/Componente'
import Propiedades from './components/Propiedades'
import Estado from './components/Estado'
import RenderizadoCondicional from './components/RenderizadoCondicional'
import RenderizadoElemento from './components/RenderizadoElemento'
import {EventosES6, EventosES7,MasSobreEventos} from './components/Eventos'
import ComunicacionComponentes from './components/ComunicacionComponentes'
import CicloVida from './components/CicloVida'
import AjaxApix from './components/AjaxApis'
import ContadorHooks from './components/ContadorHooks'
import ScrollHooks from './components/ScrollHooks'
import RelojHooks from './components/RelojHooks'
import AjaxHooks from './components/AjaxHooks'
import HooksPersonalizados from './components/HooksPersonalizados'
import Referencias from './components/Referencias'
import Formularios from './components/Formularios'
import Estilos from './components/Estilos'
//VITE  
/*npm run dev*/
/* FrameWorks CSS con React : https://www.youtube.com/watch?v=YmoNXKMoouU&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=29,
  https://bulma.io/
  https://www.youtube.com/watch?v=OYfKGT5AfZ0&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=30
*/

// Redux: libreria externa a React para el manejo del estado global
// Context: un API interna de React , es una forma mas simplificada que Redux a pasar los datos
// Son metodos que se ejecutan automaticamente en un Componente de clase y Hook useEffect ocurren 3 fases: 
/*      Montaje: componentDidMount(). Se invoca inmediatamente despues de que un componente se ha insertado al arbol del DOM(peticiones asincronas,base de datos,servicios). 
        Actualizacion: componentDidUpdate(). Se ejecuta inmediatamente despues de la actualizacion del estado o la propiedades(peticiones externas)
        Desmontaje: componentWillUnmount(). Se ejecuta antes de destruir el componente.
*/
function App() {
  return (
    <>
      <Componente msg="Components" />
      <hr />
      <Propiedades cadena="Propiedad" 
                    numero={1} booleano={true} 
                    arreglo={[1,2,3]} 
                    objeto={{correo:"miguel@123"}}
                    function ={num => num* num}
                    componenteReact = { <Componente msg="ComponentesPasado"></Componente>}
                    ></Propiedades>
      <hr />
      <Estado></Estado>
      <hr />
      <RenderizadoCondicional></RenderizadoCondicional>
      <hr />
      <RenderizadoElemento></RenderizadoElemento>
      <hr />
      <EventosES6></EventosES6>
      <hr />
      <EventosES7></EventosES7>
      <hr />
      <MasSobreEventos></MasSobreEventos>
      <hr />
      <ComunicacionComponentes/>
      <hr />
     <CicloVida></CicloVida>
     <hr />
      <AjaxApix></AjaxApix>
      <hr />
      <ContadorHooks titulo="Seguidores"></ContadorHooks>
      <hr />
      <ScrollHooks></ScrollHooks>
      <hr />
      <RelojHooks></RelojHooks>
      <hr />
      <AjaxHooks></AjaxHooks>
      <hr />
      <HooksPersonalizados></HooksPersonalizados>
      <hr />
      <Referencias></Referencias>
      <hr />
      <Formularios></Formularios>
      <hr />
      <Estilos></Estilos>
    </>
  )
}
export default App
