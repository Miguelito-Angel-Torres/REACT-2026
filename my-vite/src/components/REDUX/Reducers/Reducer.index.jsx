import {combineReducers} from "redux";
import ContadorReducer from "./ContadorReducer";
import { shoppingReducer } from "./ShoppingReducer";
import { crudReducer } from "./CrudReducer";




const reducer = combineReducers({
    contador: ContadorReducer,
    shopping: shoppingReducer ,  
    crud: crudReducer,

})

export default reducer;

