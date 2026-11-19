export default async function CommentDetail({
    params
}: {
    params: Promise<{ productId: string; commentId: string }>
}) {
    const parametros = await params;
    
    return (
        <h1>Comentario {parametros.commentId} del Producto {parametros.productId}</h1>
    );
}