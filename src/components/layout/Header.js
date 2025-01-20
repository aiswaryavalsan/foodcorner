import React from 'react'
import logoImage from '../../assets/th.jpeg'
import foodTable from '../../assets/food.jpeg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
const Header = (props) => {
  return (
    <>
    <div className={classes.header}>
        <div className={classes.logo}>
            <div>
        <img className={classes.logo_image} src={logoImage} alt="logo"></img>
        </div>
        <div>
        <p className={classes.title}>Food corner</p>
        </div>
       </div>
      <HeaderCartButton onCartShown={props.onCartShown}/>
      
        
    </div>
    <div className={classes.food_container}>
        <img  className={classes.food_image}src={foodTable} alt="a table full of food"></img>
    </div>
    </>
  )
}

export default Header