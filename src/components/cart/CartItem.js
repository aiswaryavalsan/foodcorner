import React from 'react'
import classes from './CartItem.module.css'
const CartItem = (props) => {
   
  return (
    <>
    <div className={classes.cart}>
        <h4>{props.title}</h4>
        <p>{props.price}</p>
      
        <hr/>
    </div>
    
    </>
  )
}

export default CartItem