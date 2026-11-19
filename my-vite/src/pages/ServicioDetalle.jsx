import { useParams, useNavigate } from "react-router-dom";

// 1. Cambiamos el prop a plural "servicios" (el array con todos los datos)
export function ServicioDetalle({ servicios }) {
    const navigate = useNavigate();
    const { id } = useParams();

    function handleGoBack() {
        navigate(-1);
    }

    // 2. Buscamos dentro de "servicios" y guardamos la coincidencia en "servicio"
    const servicio = servicios?.find(item => item.id.toString() === id);

    // 3. Validación si el ID no existe en la lista
    if (!servicio) {
        return (
            <section>
                <h2>El servicio buscado no existe</h2>
                <button onClick={handleGoBack}>Regresar</button>
            </section>
        );
    }

    return (
        <section>
            <h1>Detalle del Producto</h1>
            <h2>{servicio.nombre}</h2>
            <h2>{servicio.id}</h2>
            <h2>{servicio.descripcion}</h2>
            <button onClick={handleGoBack}>Regresar</button>
        </section>
    );
}