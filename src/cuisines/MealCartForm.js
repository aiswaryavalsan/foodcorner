import React, { useState } from 'react'
import classes from './MealCartForm.module.css';
const MealCartForm = () => {
    const[count,setCount]=useState(0);
    const changeCountHandler=()=>{
        setCount(prevCount=>prevCount+1);
    }
    const countDecrementHandler=()=>{
        setCount(prevCount=>prevCount-1)
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