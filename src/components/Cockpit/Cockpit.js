import React, { useContext } from 'react';

import classes from './Cockpit.module.css'
import AuthContext from '../../context/auth-context';

const cockpit = props => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const authContext = useContext(AuthContext);

    let buttonClass = '';
    if (props.showPersons) {
        buttonClass = classes.Clicked;
    }

    let authButtonClass = '';
    if (authContext.authenticated) {
        authButtonClass = classes.Clicked;
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a {props.title} App</h1>
            <p>This is really working!</p>
            <button className={buttonClass} onClick={props.togglePersons}>Toggle Persons</button>
            <button className={authButtonClass} onClick={authContext.login}>{authContext.authenticated ? 'Log Out' : 'Log In'}</button>
        </div>
    );
};

export default cockpit;