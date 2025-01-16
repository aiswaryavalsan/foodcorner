import React from 'react'
import { MealsData } from '../assets/MealsData'
import classes from './MealItem.module.css'
import MealCartForm from './MealCartForm'
const MealItem = () => {
  return (
    <div className={classes.list_items}>
    {
      MealsData.map(item=>
        <li key={item.id} className={classes.list_item}>
          
         <img className={classes.image} src={item.imageUrl} alt={item.title}/>
         <h3>{item.title}</h3>
         <div className={classes.wrapper}>
         <p>Rs.{item.price.toFixed(2)}</p>
          <MealCartForm/>
         </div>
        </li>
      )
    }
    </div>
    
  )
}

export default MealItem