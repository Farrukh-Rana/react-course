import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import styled from 'styled-components';

const StyledButtonComponent = styled.button`
  background-color: ${props => props.alt ? 'green' : 'red'};
  color: white;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alt ? 'lightgreen' : 'salmon'};
    color: black;
  }
`;

class App extends Component {
  state = {
    persons: [
      { id: 'asdasd', name: 'Max', age: 28 },
      { id: 'asdasd123', name: 'Manu', age: 29 },
      { id: 'asdasd6875', name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  };

  changedName = (event, id) => {
    const persons = [...this.state.persons];

    const personIndex = persons.findIndex(p => p.id === id);
    persons[personIndex].name = event.target.value;

    this.setState({
      persons: persons
    });
  }

  togglePersons = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => 
            <Person name={person.name} 
                    age={person.age} 
                    click={() => this.deletePersonHandler(index)}
                    key={person.id} 
                    changed={(event) => this.changedName(event, person.id)}
                    />)}
        </div>
      )

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <StyledButtonComponent alt={!this.state.showPersons} onClick={this.togglePersons}>Toggle Persons</StyledButtonComponent>
        {persons}
      </div>
    );
  }
}

export default App;