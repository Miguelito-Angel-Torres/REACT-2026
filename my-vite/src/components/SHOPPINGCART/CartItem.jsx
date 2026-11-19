import React from 'react'
{/*,delFromCart*/}
const CartItem = ({data,delOneFromCart,delAllFromCart}) => {
  let {id,name,price,quantity} = data;
  return (
    <div style={{borderBottom:"thin solid gray"}}>
      <h4>{name}</h4>
      <h5>${price}.00 x {quantity} = ${price * quantity}.00</h5>  
      {/*<button onClick={() => delFromCart(id)}>Eliminar Uno</button>*/}
      <button onClick={() => delOneFromCart(id)}>Eliminar Uno</button>
      <br />
      
      {/*<button onClick={() => delFromCart(id,true)}>Eliminar Todos</button>*/}
      <button onClick={() => delAllFromCart(id,true)}>Eliminar Todos</button>

    </div>
  )
}

export default CartItem