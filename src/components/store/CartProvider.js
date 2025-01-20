import React from 'react'
import CartContext from './cart-context'
import { useReducer } from 'react'
const initial_state={items:[],total:0}
const cartReducer=(state,action)=>{
    if(action.type==='ADD'){
        
        
        const existingItem=state.items.find((item)=>item.id===action.item.id);//it returns an object if id match
        
        let updateItems;
        if(existingItem){
           
            const updateItem={...existingItem,amount:existingItem.amount+1}//create new object to copy the existing item and change the amount
         
            updateItems=state.items.map(item=>item.id===action.item.id?updateItem:item)//return new array with updated item
          
        }
        else{
         updateItems=state.items.concat(action.item);
         console.log(updateItems)
        }
        const updatedTotal=state.total+action.item.price;
      return(
         {items:updateItems,
            total:updatedTotal
         }
      )
    }
    if(action.type==='REMOVE'){
        console.log(action.id);
        console.log(state.items);
        const existingItem=state.items.find((item)=>item.id===action.id.id);
        console.log(existingItem)
        let updateItems;
        let updatedTotal;
       
        
        if(existingItem.amount===1){
            updateItems=state.items.filter(item=>item.id!==action.id.id);
        }
        else{
        const updateItem={...existingItem,amount:existingItem.amount-1};
        updateItems=state.items.map(item=>item.id===action.id.id?updateItem:item)
        
        }
        updatedTotal-=existingItem.price;
      return{
        items:updateItems,
        total:updatedTotal
      }
    
    }

}
const CartProvider = (props) => {
    const[cartState,dispatchCart]=useReducer(cartReducer,initial_state);
    const addItemToCartHandler=(item)=>{
        dispatchCart({type:'ADD',item:item});

    }
    const removeItemFromCartHandler=(id)=>{
        dispatchCart({type:'REMOVE',id:id})

    }
    const cartItem={
        items:cartState.items,
        total:cartState.total,
        addItemHandler:addItemToCartHandler,
        removeItemHandler:removeItemFromCartHandler
    }
  return (
   
        <CartContext.Provider value={cartItem}>
         {props.children}
        </CartContext.Provider>
        )
}

export default CartProvider