import { useParams, useNavigate} from "react-router-dom"
/* useParams : detecta las variables que viene en la url*/ 
export function ProductoDetalle({productos}){
   
    function handleGoBack(){
        navigate(-1)
    }

    // useNavigate: (Paginacion de Paginas: regresar al principio)
    const navigate = useNavigate()

    const {id} = useParams();
    const producto = productos.find(producto => producto.id.toString() === id)

    return(
    <section>
        <h1> Detalle del Producto</h1>
        <h2>{producto.nombre}</h2>
        <h2>{producto.id}</h2>
        <h2>{producto.descripcion}</h2>
        <button onClick={handleGoBack}>Regresar</button>

    </section>)
    
}