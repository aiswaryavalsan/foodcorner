import React, { useContext } from 'react';
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartContext from '../store/cart-context';
import CartItem from './CartItem';
const Cart = (props) => {
    const cartCtx=useContext(CartContext);
   
  return (
    <>
      <Modal onClick={props.onClose}>
        <div className={classes.container}>Cart</div>
        <ul className={classes.cartItem}>
          {cartCtx.items.map((item) => {
            return(
                <>
               
              <CartItem title={item.title} price={item.price} amount={item.amount}/>
            </>
            )
          })}
        </ul>
        <div className={classes.total}>
          <h3>Total Amount</h3>
          <p className={classes.totalAmount}>Rs.{cartCtx.total}</p>
        </div>
        <button onClick={props.onClose}>close</button>
      </Modal>
    </>
  );
}

export default Cart