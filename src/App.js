import React, { Component } from 'react';
import classes from './App.module.css';
import Person from './Person/Person'

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
    let persons = null;
    let buttonClass = '';

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
      );

      buttonClass = classes.Clicked;
    };

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button className={buttonClass} onClick={this.togglePersons}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;