import React, { useRef, useState } from 'react'
import classes from './Checkout.module.css'
const isEmpty=(value)=>value.trim()==='';
const isNotFiveChar=(value)=>value.trim().length!==5;
const Checkout = (props) => {
   
    const nameRef=useRef();
    const streetRef=useRef();
    const postalCodeRef=useRef();
    const cityRef=useRef();
    const[formIsValid,setFormIsValid]=useState({name:true,street:true,city:true,post:true});
    const handleCheckOut=(event)=>{
        event.preventDefault();
       
          const name=nameRef.current.value;
          const street=streetRef.current.value;
          const post=postalCodeRef.current.value;
          const city=cityRef.current.value;
          const isNameIsValid=!isEmpty(name);
         const streetIsValid=!isEmpty(street);
         const cityIsValid=!isEmpty(city);
         const postalIsValid=!isNotFiveChar(post);
         const formValidity=isNameIsValid&&streetIsValid&&cityIsValid&&postalIsValid;
         setFormIsValid({
            name:isNameIsValid,
            street:streetIsValid,
            city:cityIsValid,
            post:postalIsValid
        })
        if(!formValidity){
            return;
        }
      props.onConfirm({name,street,city,post})
    
    }
  return (
    <form className={classes.form} onSubmit={handleCheckOut} >
        <div className={`${classes.control} ${formIsValid.name?'':classes.invalid}`}>
        <label htmlFor='name'>Name</label>
        <input type="text" id='name' ref={nameRef}></input>
        {!formIsValid.name&&<p>Please enter a valid Name</p>}
        </div>
        <div className={`${classes.control} ${formIsValid.street?'':classes.invalid}`}>
        <label htmlFor='street'>Street</label>
        <input type="text" id='street' ref={streetRef}></input>
        {!formIsValid.street&&<p>Please enter a valid Street</p>}
        </div>
        <div className={`${classes.control} ${formIsValid.post?'':classes.invalid}`}>
        <label htmlFor='postal'>Postal</label>
        <input type="text" id='postal' ref={postalCodeRef}></input>
        {!formIsValid.post&&<p>Please enter a valid Postal Code</p>}
        </div>
        <div className={`${classes.control} ${formIsValid.city ?'':classes.invalid}`}>
        <label htmlFor='city'>City</label>
        <input type="text" id='city' ref={cityRef}></input>
        {!formIsValid.city&&<p>Please enter a valid City</p>}
        </div>
        <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button className={classes.submit}>Confirm</button>
        </div>
        
        
        
    </form>
  )
}

export default Checkout