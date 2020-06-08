import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.module.css';
import withClass from '../../../hoc/withClass';

const person = (props) => {
    return (
        <Fragment>
            <p onClick={props.click}>user-defined component with actual name: {props.name} and age: {props.age} <b>{props.children}</b></p>
            <input onChange={props.changed} value={props.name}/>
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