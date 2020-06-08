/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment, useEffect, useRef, useContext } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.module.css';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

const person = props => {
    const focusInputRef = useRef(null);
    useEffect(() => {
        focusInputRef.current.focus();
    }, []);

    const authContext = useContext(AuthContext);

    return (
        <Fragment>
            {authContext.authenticated ? <p>Authenticated!!!</p> : null}
            <p onClick={props.click}>user-defined component with actual name: {props.name} and age: {props.age} <b>{props.children}</b></p>
            <input ref={focusInputRef} onChange={props.changed} value={props.name}/>
        </Fragment>
    );
};

person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(person, classes.Person);