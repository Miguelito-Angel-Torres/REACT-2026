import React from 'react'
import Contador from './Contador'

function Memorizacion() {
    /* 
    Se encarga de memorizar un componente
    Lo vuelve a memorizar al momento de que sus props cambia
    Evita re renderizados
    Hay que evitarlos en la medida de lo posible, pues podria ser mas costosa
    la tarea de moemorizacion que el re renderizado de comp
    Usalo: 
        Tenemos muchos elementos renderizados en una lista
        Llamamos datos de Apis
        Un comp se vuelve pesado
        Salen aletartas de rendimiento de consola

        useCallback: 
        Memoriza una funcion,para no volverla a definir en cada render
        Usalo siempre que se pase una funcion como prop a un comp memorizado
        Usalo siempre que se pase una funcion como parametro de un efecto
        UseMemo:
        Memoriza un valor calculado, es decir, el resultado de la funcion
        Genera propiedades computadas
        Usalo en procesos pesados

    */ 
  return (
    <div>
        <h1>Memorizacion</h1>
        <hr />
        <h2>Teoria:</h2>
        <hr />
        <Contador></Contador>


    </div>
  )
}

export default Memorizacion