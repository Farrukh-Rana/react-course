import React from 'react';
//import './Person.css';
import styled from 'styled-components';

const StyledDivComponent = styled.div`
    width: 60%;
    margin: 5px auto;
    padding: 5px;
    border: 3px solid #eee;
    text-align: center;

    @media (min-width: 500px) {
        width: 450px;
    }
`;

const person = (props) => {
    return (
        <StyledDivComponent>
            <p onClick={props.click}>user-defined component with actual name: {props.name} and age: {props.age} <b>{props.children}</b></p>
            <input onChange={props.changed} value={props.name}/>
        </StyledDivComponent>
    );
};

export default person;