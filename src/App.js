import React, { Component } from 'react';
import HeaderComponent from './components/header/headerComponent';
import EmployeesComponent from './components/employees/employeesComponent';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <EmployeesComponent />
      </div>
    );
  }
}

export default App;
