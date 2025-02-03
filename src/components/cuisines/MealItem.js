import React, { useEffect, useState } from 'react'
// import { MealsData } from '../../assets/MealsData'
import classes from './MealItem.module.css'
import MealCartForm from './MealCartForm'

const MealItem = () => {
  const[mealsData,setMealsData]=useState([]);
  const[isLoading,setIsLoading]=useState(true);
  const[httpError,setHttpError]=useState('');
  const fetchData=async()=>{
    try{
      setHttpError('');
      
    const response=await fetch('https://foodorderapp-28bb4-default-rtdb.firebaseio.com/meals.json');
    console.log(response)
    if(!response.ok){
      
      throw new Error("Something Went Wrong")
    }
    const data=await response.json();
    if(!data){
      throw new Error("No data found!! please check your url path")
    }
    const meals=[];
    for(const key in data){
      meals.push({...data[key] ,id:key});

    }
    setMealsData(meals);
    console.log(data);
    setIsLoading(false)
  }catch(error){
    setHttpError(error.message)

  }
   
    
  }
  useEffect(()=>{
    fetchData();
  },[])
  if(httpError){
   return(
      <p style={{textAlign:"center", color:'red'}}>{httpError}</p>
    )
  }
  if(isLoading){
    return(<p>Loading...</p>)
  }
  return (
    <div className={classes.list_items}>
    {
      mealsData.map(item=>
        <li key={item.id} className={classes.list_item}>
          
         <img className={classes.image} src={item.imageUrl} alt={item.title}/>
         <h3>{item.title}</h3>
         <div className={classes.wrapper}>
         <p>Rs.{item.price.toFixed(2)}</p>
          <MealCartForm item={item}/>
         </div>
        </li>
      )
    }
    </div>
    
  )
}

export default MealItem