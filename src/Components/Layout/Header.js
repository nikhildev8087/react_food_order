import React, {Fragment} from "react";
import  mealImage from "../../assets/meals.jpg"
import classes from '../Layout/Header.module.css';
import HeaderCardButton from "./HeaderCardButton";

const Header =  (props) => {
    return (
    <Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCardButton/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealImage} alt="A table of full delicious food !"/>
        </div>
    </Fragment>
    )
}


export default Header;
