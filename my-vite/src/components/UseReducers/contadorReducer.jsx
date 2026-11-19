import { TYPES } from "./contadorActions"




export const contadorinitialState = {contador:0}

// init: es cuando se monta el componente
export const contadorinit = (contadorinitialState) =>{
    return{
        contador: contadorinitialState.contador + 10
    }
}

export function contadorReducer(state,action){
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