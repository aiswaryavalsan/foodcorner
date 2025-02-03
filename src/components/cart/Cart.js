import React, { useContext, useState } from 'react';
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartContext from '../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';
const Cart = (props) => {
    const cartCtx=useContext(CartContext);
    const[isOrderPlaced,setOrderPlaced]=useState(false)
    const orderHandler=()=>{
      setOrderPlaced(true);
    }
    const onCancel=()=>{
      setOrderPlaced(false)
    }
   const modalAction=<div>
   <button onClick={props.onClose}>close</button>
   <button onClick={orderHandler}>Order</button>
   </div>
  return (
    <>
      <Modal onClick={props.onClose}>
        <div className={classes.container} >Cart</div>
        <ul className={classes.cartItem}>
          {cartCtx.items.map((item) => {
            return(
                <>
             
              <CartItem key={item.id} title={item.title} price={item.price} amount={item.amount}/>
            </>
            )
          })}
        </ul>
        <div className={classes.total}>
          <h3>Total Amount</h3>
          <p className={classes.totalAmount}>Rs.{cartCtx.total}</p>
        </div>
       {isOrderPlaced&&<Checkout onCancel={onCancel}/>}
       {!isOrderPlaced&&modalAction }
       
       
      </Modal>
    </>
  );
}

export default Cart