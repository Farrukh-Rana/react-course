import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className='Person'>
            <p onClick={props.click}>user-defined component with actual name: {props.name} and age: {props.age} <b>{props.children}</b></p>
            <input onChange={props.changed} value={props.name}/>
        </div>
    );
}

export default person;