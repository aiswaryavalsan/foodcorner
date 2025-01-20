import React, { useState,useContext } from 'react'
import classes from './MealCartForm.module.css';
import CartContext from '../store/cart-context';
const MealCartForm = (props) => {
  const cartctx=useContext(CartContext);
    const[count,setCount]=useState(0);
    const changeCountHandler=()=>{
        setCount(prevCount=>prevCount+1);
        cartctx.addItemHandler({id:props.item.id,title:props.item.title,price:props.item.price,amount:1})
        // cartctx.addItemHandler({})
    }
    const countDecrementHandler=()=>{
        setCount(prevCount=>prevCount-1)
        cartctx.removeItemHandler({id:props.item.id})
    }
    
      
  return (
    <div>

      {count===0?<button className={classes.add_button} onClick={changeCountHandler}>Add</button>:''}
      {count>0?
      <>
      <div className={classes.cart_part}>
      <button onClick={countDecrementHandler}>-</button>
      <p>{count}</p>
      <button onClick={changeCountHandler}>+</button>
      </div>
      </>:
      ''
      }
    </div>
  )
}

export default MealCartForm