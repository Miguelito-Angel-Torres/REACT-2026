/// Importa el tipo "Metadata" de Next.js para configurar el título y descripción de la pestaña del navegador
import { Metadata } from "next";

/// Define un molde (tipo) llamado "Props" para reutilizarlo y avisar a TypeScript qué parámetros recibirá la ruta
type Props = {
    /// Indica que "params" es una Promesa que al abrirse entregará el "productId" en formato texto (string)
    params: Promise<{ productId: string }>
}

/// Función especial y asíncrona de Next.js que modifica dinámicamente los metadatos (<head>) de la página
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    /// Detiene la lectura una fracción de segundo (await) hasta obtener el valor real de la URL
    const parametros = await params;

    /// Retorna el título dinámico que aparecerá en la pestaña del navegador (ej. "Producto 1000")
    return {
        title: `Producto ${parametros.productId}`
    }
}

/// Componente principal (asíncrono) que dibuja el contenido visible (<body>) de esta ruta
export default async function ProductDetail({ params }: Props) {
    /// Espera nuevamente a que los parámetros de la URL estén listos para usarlos en el componente
    const parametros = await params;

    /// Renderiza el encabezado H1 en pantalla insertando el ID dinámico dentro del HTML
    return <h1>Producto {parametros.productId}</h1>
}