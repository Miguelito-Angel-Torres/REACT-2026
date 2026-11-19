

import ProductItem from '../../SHOPPINGCART/ProductItem';
import CartItem from '../../SHOPPINGCART/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, clearCart, delFromCart } from '../Actions/shoppingAction';




const ShoppingCartRedux = () => {
   const state = useSelector(state => state);
   const dispatch = useDispatch()
    const {products, cart} = state.shopping;





  return (
    <div>
        <h2>Carrito de Compra</h2>
        <h3>Productos</h3>
        <article className="box">
            {products.map((product) => <ProductItem key={product.id} data ={product}
            addToCart={() => dispatch(addToCart(product.id))}></ProductItem>)}

        </article>
        <h3>Carrito</h3>
         <article className="box">

            {cart.map((item,index) => <CartItem key={index} data={item} 
            delOneFromCart={() => dispatch(delFromCart(item.id))}
            delAllFromCart = {() => dispatch(delFromCart(item.id,true))}
            ></CartItem>)}
            

        </article>
        <button onClick={() => dispatch(clearCart())}>Limpiar Carrito</button>
    </div>
  )
}

export default ShoppingCartRedux