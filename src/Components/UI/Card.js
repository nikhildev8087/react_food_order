import React from "react";
import classes from '../UI/Card.module.css';

const Card = (props)  => {
    return (
        <div className={classes.card}>{props.childern}</div>
    )
}

export default Card;