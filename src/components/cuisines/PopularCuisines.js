import React from 'react'
import classes from './PopularCuisines.module.css'
const cuisines=[
    {id:1563},
    {id:1601},
    {id:1603},
    {id:1604},
    {id:1605},
    {id:1612},
    {id:1622}
]


const PopularCuisines = () => {
  return (
    <>
    <p>Popular cuisines</p>
    <div className={classes.cuisines}>
         
        {cuisines.map((item)=>{
            return (
              <>
             
                <div className={classes.image}>
                  <button className={classes.image_button}>
                    <img
                      className={`${classes.image_item}`}
                      src={`/assets/production/${item.id}.jpeg `}
                      alt="food"
                    />
                  </button>
                </div>
              </>
            );
        })}
    </div>
    </>
  )
}

export default PopularCuisines