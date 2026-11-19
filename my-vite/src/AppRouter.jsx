import CrudApp from "./components/CRUD/CrudApp";
import './indexCrud.css'
import './App.css'
import CrudApi from "./components/CRUD_API/CrudApi";
import SongSearch from "./components/SONG-SEARCH/SongSearch";
import SelectsAnidados from "./components/SELECTS ANIDADOS/SelectsAnidados";
import ContactForm from "./components/ContactForm";
import Modals from "./components/MODALS/Modals";
// para crear routers : npm install react-router-dom

//
import {BrowserRouter,Routes,Route,Navigate, HashRouter,Link} from "react-router-dom";
import { Contacto } from "./pages/Contacto";
import { Acerca } from "./pages/Acerca";
import { Home } from "./pages/Home";
import { Header } from "./componets_pages/Header";
import { Menu } from "./componets_pages/Menu";
import {Error404} from "./pages/Error404"
import { Productos } from "./pages/Productos";
import { ProductoDetalle } from "./pages/ProductoDetalle";
import { useState } from "react";
import { Servicio } from "./pages/Servicios";
import { ServicioLista } from "./pages/ServiciosLista";
import { ServiciosHome } from "./pages/ServiciosHome";
import { ServicioDetalle } from "./pages/ServicioDetalle";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import PrivateRoute from "./componets_pages/PrivateRoute";
import Memorizacion from "./components/MEMORIZACION/Memorizacion";
import MyPage from "./components/MYPAGE/MyPage";
import MyPageContext from "./components/MYPAGE/MyPageContext";
import { CrudProvider } from "./components/CRUD_API/CONTEXTAPI/CrudContext";
import UseReducers from "./components/UseReducers/UseReducers";
import ShoppingCart from "./components/SHOPPINGCART/ShoppingCart";
import Redux from "./components/REDUX/Components/ContadorRedux";

import {Provider} from "react-redux";
import store from "./components/REDUX/Store.index";
import ContadorRedux from "./components/REDUX/Components/ContadorRedux";
import ShoppingCartRedux from "./components/REDUX/Components/ShoppingCartRedux";


//


function AppRouter(){
    const [productos, setproductos] = useState([
        {id:1,
        nombre:"Producto 1",
        descripcion:"50"},

        {id:2,
        nombre:"Producto 2",
        descripcion:"500",}


    
    ])

    const [servicios, setServicios] = useState([
        {id:1,
        nombre:"Servicio 1",
        descripcion:100},

        {id:2,
        nombre:"Servicio 2",
        descripcion:200},


    
    ])

// Context: Compartir variable de estado global


    return(
        <>  
        
            {/*{<CrudProvider>
                 <CrudApi></CrudApi>

            </CrudProvider>*/ }
           
            {/*<SongSearch></SongSearch>*/}
            {/*<Memorizacion></Memorizacion>*/}
            {/*<MyPageContext></MyPageContext>*/}
            {/*<UseReducers></UseReducers>*/}
            {/*<ShoppingCart></ShoppingCart>*/}

            <Provider store={store}>
                {/*<ContadorRedux></ContadorRedux>*/}
                {<ShoppingCartRedux></ShoppingCartRedux>}
                
            </Provider>
            

            {/*<h2>HasRouter</h2>
            <HashRouter>
                <Menu></Menu>
                 <Routes>
                    <Route exact path="/" element={<Home></Home>}></Route>
                    <Route path="/contacto" element={<Contacto></Contacto>}></Route>
                    <Route path="/acerca" element={<Acerca></Acerca>}></Route>
                 </Routes>
            </HashRouter>
            <BrowserRouter>
                <Header></Header>
                 <Menu></Menu>
                <Routes>
                    
                    <Route exact path="/" element={<Home></Home>}></Route>
                    <Route path="/contacto" element={<Contacto></Contacto>}></Route>
                    <Route path="/acerca" element={<Acerca></Acerca>}></Route>
                    <Route path="/about" element={<Navigate to="/acerca"/>}></Route>
                    <Route path="/formulario" element={<ContactForm></ContactForm>}></Route>
                    <Route path="*" element={<Error404></Error404>}></Route>
                    <Route path="/productos" element={<Productos productos={productos}></Productos>}></Route>
                    <Route path="/productos/:id" element={<ProductoDetalle productos={productos}></ProductoDetalle>}></Route>
                    
                    <Route path="/servicios" element={<Servicio />}>
                        <Route index element={<ServiciosHome></ServiciosHome>} />
                        <Route path="lista" element={<ServicioLista servicios={servicios}></ServicioLista>} />
                        <Route path=":id" element={
                            <>
                                <ServicioLista servicios={servicios}/>
                                <ServicioDetalle servicios={servicios}></ServicioDetalle>

                            
                            </>
                        } />
                        <Route path="garantia" element={<h2>Garantía de Servicio</h2>} />
                    </Route>
                     <Route path="/login" element={<Login></Login>}></Route>
                     <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
                </Routes>
            </BrowserRouter> */}
                
        </>
    
    );
}
export default AppRouter;