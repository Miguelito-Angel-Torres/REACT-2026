import React, { useReducer } from 'react'
import { shoppingInitialState, shoppingReducer } from './shoppingReducer'
import ProductItem from './ProductItem'
import CartItem from './CartItem'
import { TYPES } from './shoppingAction'


const ShoppingCart = () => {
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)
    const {products, cart} = state

    const addToCart = (id) =>{
        dispatch({type:TYPES.ADD_TO_CART,payload:id})
    }
    const delFromCart = (id,all = false) =>{
        if(all){
            dispatch({type:TYPES.REMOVE_ALL_FROM_CART,payload:id});

        }else{
            dispatch({type:TYPES.REMOVE_ONE_FROM_CART,payload:id});
        }
    }

    const clearCart = () => {
        dispatch({type:TYPES.CLEAR_CART})
    }



  return (
    <div>
        <h2>Carrito de Compra</h2>
        <h3>Productos</h3>
        <article className="box">
            {products.map((products) => <ProductItem key={products.id} data ={products}
            addToCart={addToCart}></ProductItem>)}

        </article>
        <h3>Carrito</h3>
         <article className="box">

            {cart.map((item,index) => <CartItem key={index} data={item} delFromCart={delFromCart}
            ></CartItem>)}
            

        </article>
        <button onClick={clearCart}>Limpiar Carrito</button>
    </div>
  )
}

export default ShoppingCart