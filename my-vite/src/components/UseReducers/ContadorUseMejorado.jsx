import { useReducer} from 'react'
import { contadorinit, contadorinitialState, contadorReducer } from './contadorReducer'
import { TYPES } from './contadorActions'


const ContadorUseMejorado = () => {
    // reducer : funcion que permite manipular el estado
    const [state, dispatch] = useReducer(contadorReducer, contadorinitialState,contadorinit)


    const sumar = () =>{
        dispatch({type:TYPES.INCREMENT})
    }

    const sumar5 = () =>{
        dispatch({type:TYPES.INCREMENT_5,payload:5})
    }

    const restar = () =>{
        dispatch({type:TYPES.DECREMENT})
    }    


  return (
    <div>
    <h1>Contador Mejorado</h1>
    <nav>
        <button onClick={sumar5}>+5</button>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
    </nav>
    <h3>
        {state.contador}
    </h3>
    </div>
  )
}

export default ContadorUseMejorado