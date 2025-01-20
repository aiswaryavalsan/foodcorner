import React from "react";
import ReactDOM from'react-dom';
import classes from './Modal.module.css'
const Backdrop=(props)=>{
    return<div className={classes.backdrop} onClick={props.onClick}></div>
}
const portal=document.getElementById('modalPortal');
const Overlay=props=>{
    return(
        <div className={classes.modal}>
            <div>
                {props.children}
            </div>
        </div>
    )
}
const Modal=props=>{
    return(
        <>
        {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>,portal)}
        {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>,portal)}
        </>
    )
}
export default Modal;