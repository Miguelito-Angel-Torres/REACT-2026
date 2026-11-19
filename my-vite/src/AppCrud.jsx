import CrudApp from "./components/CRUD/CrudApp";
import './indexCrud.css'
import CrudApi from "./components/CRUD_API/CrudApi";
import SongSearch from "./components/SONG-SEARCH/SongSearch";
import SelectsAnidados from "./components/SELECTS ANIDADOS/SelectsAnidados";
import ContactForm from "./components/ContactForm";
import Modals from "./components/MODALS/Modals";
// para crear routers : npm install react-router-dom
import { Home } from "./pages/Home";

//
import {BrowserRouter ,Routes,Route,Link} from "react-router-dom";

// Context: Compartir variable de estado global

function AppCrud(){
    return(
        <>  
            <hr />
            {/*<ContactForm></ContactForm>*/}
            {/*<Modals></Modals>*/}
            {/*<SelectsAnidados></SelectsAnidados>*/}
            {/*<SongSearch></SongSearch>*/}
            {/*<CrudApi></CrudApi>
            <hr />
            <CrudApp></CrudApp>*/}
            {/*
                
            
            
            */}
                
        </>
    
    );
}
export default AppCrud;