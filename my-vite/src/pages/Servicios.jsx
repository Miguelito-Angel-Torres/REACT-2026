import { Outlet, Link } from "react-router-dom";

export function Servicio() {
    return (
        <>
            <h1>Servicios</h1>
            <nav className="menu">
                <Link to="/servicios">Inicio</Link>
                <Link to="/servicios/lista">Lista</Link>
                <Link to="/servicios/garantia">Garantia</Link>
            </nav>
            
            
            <Outlet />
        </>
    );
}
/* Outlet: Representa cualquier contenido dentro de la ruta anidadas */
/*npm run dev*/ 