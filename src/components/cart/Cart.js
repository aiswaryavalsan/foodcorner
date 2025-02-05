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
    const submitCartHandler=async(userData)=>{
      const response=await fetch('https://foodorderapp-28bb4-default-rtdb.firebaseio.com/cart.json',
       {body:JSON.stringify({user:userData,orderDetails:cartCtx.items}),
       method:'POST',
       headers:{'Content-type':'application/json'}
      })
      const data=await response.json();
      console.log(data);
      cartCtx.clearCartHandler({type:'CLEAR'})

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
       {isOrderPlaced&&<Checkout onCancel={onCancel} onConfirm={submitCartHandler}/>}
       {!isOrderPlaced&&modalAction }
       
       
      </Modal>
    </>
  );
}

export default Cart