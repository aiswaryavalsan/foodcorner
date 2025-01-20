import './App.css';
import Header from './components/layout/Header';
import SearchCuisines from './components/Search/SearchCuisines';
import MealItem from './components/cuisines/MealItem';
import PopularCuisines from './components/cuisines/PopularCuisines';
import Cart from './components/cart/Cart';
import { useState } from 'react';
function App() {
  const[cartIsShown,setCartIsShown]=useState(false);
  const setCartVisible=()=>{
    setCartIsShown(true);
  }
  const setCartHide=()=>{
    setCartIsShown(false);
  }
  return(
    <>
   <Header onCartShown={setCartVisible}/>
   {cartIsShown&&<Cart onClose={setCartHide}/>}
   
   <SearchCuisines/>
   {/* <PopularCuisines/> */}
   <MealItem/>
    
    </>
  )
}

export default App;
