import React, { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = props => {
    return <div className={classes.backdrop} />
};
const ModalOverlay = props => {
    return(
    <div className={classes.Modal}>
        <div className={classes.content}>{props.childern}</div>

    </div>

    ) 
};

const portalElement = document.getElementById("Overlays");
const Modal = (props) => {
    return ( 
    <Fragment>
        {ReactDOM.createPortal(<Backdrop />, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.childern}</ModalOverlay>)}
    </Fragment>

    )
}

export default Modal;