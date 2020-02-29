import React, {Component} from'react';
import'./style.scss';

class LoadingComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {  };
	}
	render() { 
		return ( 
			<div className="loading-Container">
				<i className="fab fa-soundcloud"></i>
				<p>Loading . . .</p>
			</div>
		);
	}
}
 
export default LoadingComponent;