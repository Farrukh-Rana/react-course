import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }

    return (
        <div className='Person' style={style}>
            <p onClick={props.click}>user-defined component with actual name: {props.name} and age: {props.age} <b>{props.children}</b></p>
            <input onChange={props.changed} value={props.name}/>
        </div>
    );
}

export default Radium(person);