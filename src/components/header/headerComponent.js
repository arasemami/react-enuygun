import React, { Component} from 'react';
import './style.scss';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
           <header>
               <p>My header is heaer . . .</p>
           </header>
         );
    }
}
 
export default HeaderComponent;