import React from 'react';
import classes from './Cockpit.module.css'

const cockpit = props => {
    let buttonClass = '';
    if (props.showPersons) {
        buttonClass = classes.Clicked;
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a {props.title} App</h1>
            <p>This is really working!</p>
            <button className={buttonClass} onClick={props.togglePersons}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;