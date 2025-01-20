import React, { useContext } from 'react'
import CartIcon from '../cart/CartIcon'
import classes from'./HeaderCartButton.module.css'
import CartContext from '../store/cart-context'
const HeaderCartButton = (props) => {
  const catrctx=useContext(CartContext);
  const noOfCartItems=catrctx.items.reduce((curno,item)=>curno+item.amount,0)
  return (
    <button className={classes.cart_button} onClick={props.onCartShown}>
      
      
       
        <span className={classes.cart_badge}>
        <span className={classes.cart_icon} ><CartIcon/>
            {noOfCartItems}</span>
        </span>
        <span className={classes.cart_name}>Cart</span>
       
    </button>
  )
}

export default HeaderCartButton