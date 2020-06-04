import React from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const persons = props => {
    return (
        props.persons.map((person, index) => 
            <ErrorBoundary key={person.id}>
              <Person name={person.name} 
                      age={person.age} 
                      click={() => props.click(index)} 
                      changed={(event) => props.changed(event, person.id)}
              />
            </ErrorBoundary>)
    );
};

export default persons;