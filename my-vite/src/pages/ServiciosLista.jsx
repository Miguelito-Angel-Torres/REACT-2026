import { Link } from "react-router-dom"
export function ServicioLista({servicios}){
    return(
        <section>
            <h1>Servicio La Lista</h1>
            <ul>
                        {servicios.map((pro)=> 
                        <li key={pro.id}>
                            <Link to={`/servicios/${pro.id}`}>{pro.nombre}</Link>
                        
                        </li>)}
            </ul>
    
        </section>)
}