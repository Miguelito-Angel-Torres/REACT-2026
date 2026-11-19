import { Link, NavLink} from "react-router-dom"


export function Menu(){
    return(
        <>
        <nav>
            <Link to="/">Home</Link>
            <br />
            <Link to="/contacto">Contacto</Link>
            <br />
            <Link to="/acerca">Cerca</Link>
            <br />
            <Link to="/about">About</Link>
            <br />
            <Link to="/formulario">Contacto Formulario</Link>
            <br />
            <Link to="/productos">Productos</Link>
             <br />
            <Link to="/servicios">Servicio</Link>
            <br />
            <Link to="/login">Login</Link>
            <br />
            <Link to="/dashboard">Dashboard</Link>
            
            
        </nav>
        <nav>
            <NavLink 
            className={({isActive})=> isActive ? "active-link":null} 
            to="/">Home</NavLink>
            <br />
            <NavLink
            className={({isActive})=> isActive ? "active-link":null}
            to="/contacto">Contacto</NavLink>
            <br />
            <NavLink 
            className={({isActive})=> isActive ? "active-link":null}
            to="acerca">Cerca</NavLink>
            <br />
            <NavLink 
            className={({isActive})=> isActive ? "active-link":null}
            to="/formulario">Contacto Formulario</NavLink>
           
        </nav>
        </>
        
    )
}