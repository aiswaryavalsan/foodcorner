import React from 'react'
import classes from'./SearchCuisines.module.css'
const SearchCuisines = () => {
  return (
    <div className={classes.searchbox}>
        <input placeholder='Search here'></input>
    </div>
  )
}

export default SearchCuisines