import React from 'react'
import {memo,useMemo} from 'react'
const ContadorHijo = ({contador,sumar,restar}) => {

    // lo hemos memorizado una sola vez , no es necesario que se renderiza cada vez
    const superNumero  = useMemo(() => {
        let Numero = 0

    for(let i=0;i < 10000;i++){
        Numero++;
    }
    return Numero
    }, [])

  console.log("Hijo Contador se Renderiza")  
  return (
    <div style = {{border:"thin solid #000", margin:"1rem",padding:"1rem"}}>
        <h2>Hijo Contador</h2>
        <h3>{contador}</h3>
        <nav>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>

        </nav>
        <h3>{superNumero}</h3>
    </div>
  )
}

export default memo(ContadorHijo)