import React, {Component} from 'react';
import './style.scss';

class NotFoundComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {  };
	}
	render() { 
		return ( 
			<div className="container">
				<div className="not-found">
					<h1>4 0 4</h1>
					<p>the page is not found.</p>
				</div>
			</div>
		);
	}
}
 
export default NotFoundComponent;