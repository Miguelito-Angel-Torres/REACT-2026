import CrudForm from '../CRUD/CrudForm';
import CrudTable from '../CRUD/CrudTable';
import Loader from './Loader';
import Message from './Message';
import { HashRouter, Routes, Route, NavLink } from "react-router-dom";
//import CrudContext from './CONTEXTAPI/CrudContext';
import CrudContext from '../REDUX/Components/CrudContext';
import { useContext } from 'react';

const  CrudApi = () => {
    const {db,loading,error} = useContext(CrudContext)

  return (

    <div>
        <HashRouter>
            <header>
                <h2>CRUD API CON RUTAS - CONTEXT    </h2>
                <nav>
                <NavLink 
                    to="/" 
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    Santos
                </NavLink>
                <NavLink 
                    to="/agregar" 
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    Agregar
                </NavLink>
                </nav>
            </header>

            <Routes>
                {/* Ruta Principal: Tabla, Loader y Mensaje de Error */}
                <Route 
                path="/" 
                element={
                    <>
                    {loading && <Loader />}
                    {error && (
                        <Message 
                        msg={`Error ${error.status}:${error.statusText}`} 
                        bgColor="#dc3545" 
                        />
                    )}
                    {db && (
                        <CrudTable 
                       
                        />
                    )}
                    </>
                } 
                />

                {/* Ruta Agregar */}
                <Route 
                path="/agregar" 
                element={
                    <CrudForm 
                     
                    />
                } 
                />

                {/* Ruta Editar */}
                <Route 
                path="/editar/:id" 
                element={
                    <CrudForm 
                    
                    />
                } 
                />

                {/* Ruta Eliminar */}
                <Route path="/eliminar/:id" element={<h2>Santos Eliminar</h2>} />

                {/* Ruta Error 404 */}
                <Route path="*" element={<h2>Error 404: Not Found</h2>} />
            </Routes>
        </HashRouter>
    </div>
    
  )
}

export default CrudApi