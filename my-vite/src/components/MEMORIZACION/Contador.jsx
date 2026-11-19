import React, { useState } from 'react'
import ContadorHijo from './ContadorHijo'
import { useCallback } from 'react'

const Contador = () => {

    const [contador, setContador] = useState(0)
    const [input, setinput] = useState("")

     const sumar = useCallback(
       () => {
         setContador(contador + 1)
       },
       [contador],
     )
     
    
    const restar = useCallback(
       () => {
         setContador(contador - 1)
       },
       [contador],  
     )

    const handleInput = (e) => setinput(e.target.value)

  
     
  return (
    <div>
        <h2>Contador</h2>
        <nav>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            
        </nav>
            <h3>{contador}</h3> 
            <input type="text" onChange={handleInput} value={input} />
            <ContadorHijo contador={contador} sumar={sumar}
             restar = {restar}
            ></ContadorHijo>
    </div>
  )

}
export default Contador