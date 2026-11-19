import { createStore } from "redux";
import reducer from "./Reducers/Reducer.index";

// estamos pasando todas las funcionalidades de la aplicacion.
const store = createStore(reducer);
// para detectar cambio en el estado
store.subscribe(() => {
    // nuevo estado
    console.log(store)
});

export default store