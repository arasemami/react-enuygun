import React, { Component } from 'react'; 
import { Router ,  Route , browserHistory  } from 'react-router';

import RootComponent from './root';
import EmployeesComponent from './components/employees/employeesComponent';
import ProfileComponent from './components/profile/profileComponent';


class RouterComponent extends Component {

    constructor(props) {
      super(props);
      this.state = { current:false   } 
  } 
  
    render() {

 
      return (
       
            <Router history={browserHistory}>
              <Route  component={RootComponent}> 
                  <Route   path="/" component={EmployeesComponent} /> 
                  <Route   path="employees" component={EmployeesComponent} /> 
                  <Route   path="profile" component={ProfileComponent} /> 
              </Route>
            </Router>
         
      );
    }
  }
  
  export default RouterComponent;