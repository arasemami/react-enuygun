import React, { Component } from 'react'; 
import { Router ,  Route , browserHistory  } from 'react-router';
// child components -->
import RootComponent from './root';
import EmployeesComponent from './components/employees/employeesComponent';
import ProfileComponent from './components/profile/profileComponent';
import NotFoundComponent from './components/notFound/notFoundComponent';
import SampleComponent from './components/sample/sampleComponent';

class RouterComponent extends Component {

	constructor(props) {
		super(props);
		this.state = { current:false   }; 
	} 
  
	render() {
		return (
			<Router history={browserHistory}>
				<Route  component={RootComponent}> 
					<Route   path="/" component={EmployeesComponent} /> 
					<Route   path="employees" component={EmployeesComponent} /> 
					<Route   path="profile" component={ProfileComponent} /> 
					<Route   path="sample" component={SampleComponent} /> 
					<Route   path="*" component={NotFoundComponent} status={404} />
				</Route>
			</Router>
		);
	}
}
  
export default RouterComponent;