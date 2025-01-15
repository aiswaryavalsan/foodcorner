import React from 'react'
import CartIcon from '../cart/CartIcon'
import classes from'./HeaderCartButton.module.css'
const HeaderCartButton = () => {
  return (
    <button className={classes.cart_button}>
      
      
       
        <span className={classes.cart_badge}>
        <span className={classes.cart_icon} ><CartIcon/>
            0</span>
        </span>
        <span className={classes.cart_name}>Cart</span>
       
    </button>
  )
}

export default HeaderCartButton