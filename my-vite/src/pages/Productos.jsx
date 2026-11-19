import { use } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"


export function Productos({productos}){
   
    let {search} = useLocation(); //?inicio=1&fin=20
   
    let query = new URLSearchParams(search)
    let start = parseInt(query.get("inicio")) || 1;
    let end = parseInt(query.get("fin")) || 20;

    let navigate = useNavigate()
    const LIMIT = 20

    const handlePrev = (e) => {
        if (start - LIMIT >= 0) {
        navigate(`?inicio=${start - LIMIT}&fin=${end - LIMIT}`);
    }
    }
    const handleNext = (e) => {
        //history.push({search:`?inicio=${start + LIMIT}&fin=${end + LIMIT}`})
        navigate(`?inicio=${start + LIMIT}&fin=${end + LIMIT}`)
    }


    return(
    <section>
        <h1>Producto</h1>
        <ul>
            {productos.map((pro)=> 
            <li key={pro.id}>
                <Link to={`/productos/${pro.id}`}>{pro.nombre}</Link>
            
            </li>)}
        </ul>
        Mostrando productos del <b>{start}</b> al <b>{end}</b>
        <br />

        {start > LIMIT &&<button onClick={handlePrev}>Atras</button>}

        <button onClick={handleNext}>Adelante</button>
    </section>


)
    
}