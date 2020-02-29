import React, {Component} from 'react';
import HeaderComponent from './components/header/headerComponent';
export default class Root extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    render() { 
        return ( 
            <div>
                <HeaderComponent />
                <div className="container-fluid"> 
                    { this.props.children}  
                </div>
            </div>
         );
    }
}
 