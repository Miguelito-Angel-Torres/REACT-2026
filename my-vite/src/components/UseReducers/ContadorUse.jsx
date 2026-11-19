import  { useReducer} from 'react'

const initialState = {contador:0}

// init: es cuando se monta el componente
const init = (initialState) =>{
    return{
        contador: initialState.contador + 10
    }
}

const TYPES = {
    INCREMENT:"INCREMENT",
    INCREMENT_5:"INCREMENT_5",
    DECREMENT:"DECREMENT",
    DECREMENT_5:"DECREMENT_5",
    RESET:"RESET"
}


function reducer(state,action){
    // las acciones que recibe.
    // action: Tiene dos propiedades: el tipo de accion y el valor que existe o no, que se pasa.
    switch(action.type){
        case TYPES.INCREMENT:
            return {contador:state.contador + 1}
        case TYPES.DECREMENT:
            return {contador:state.contador - 1}
        case TYPES.INCREMENT_5:
            return  {contador:state.contador + action.payload }
        default:
        return state;
    } 
}



const ContadorUse = () => {
    // reducer : funcion que permite manipular el estado
    const [state, dispatch] = useReducer(reducer, initialState,init)


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
    <h1>Contador</h1>
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

export default ContadorUse