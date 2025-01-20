import React from 'react'
import classes from './CartItem.module.css'
const CartItem = (props) => {
   
  return (
    <>
    <div className={classes['cart-item']}>
      <h2>{props.title}</h2>
      <div className={classes.summary}>
      <span className={classes.price}>Rs.{(props.price).toFixed(2)}</span>
      <span className={classes.amount}>x{props.amount}</span>
      </div>
    </div>
    
    </>
  )
}

export default CartItem