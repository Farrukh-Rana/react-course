import React, { Component } from 'react';

import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import AuthContext from '../context/auth-context';

class App extends Component {
  state = {
    persons: [
      { id: 'asdasd', name: 'Max', age: 28 },
      { id: 'asdasd123', name: 'Manu', age: 29 },
      { id: 'asdasd6875', name: 'Stephanie', age: 26 }
    ],
    showPersons: false,
    authenticated: false
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

  loginHandler = () => {
    this.setState((prevState, props) => {
      return {
        authenticated: !prevState.authenticated
      };
    });
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons persons={this.state.persons} click={this.deletePersonHandler} changed={this.changedName}/>;
    };

    return (
      <div className={classes.App}>
        <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler}}>
          <Cockpit title={this.props.appTitle} showPersons={this.state.showPersons} togglePersons={this.togglePersons}/>
          {persons}
        </AuthContext.Provider>
      </div>
    );
  }
}

export default App;