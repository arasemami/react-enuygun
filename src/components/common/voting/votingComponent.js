import React, {Component} from 'react';
import './style.scss';

class VotingComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    like(e){
        this.props.clickA(this.props.vote+1);
    }

    disLike(){ 
        this.props.clickA(this.props.vote-1);
    }
    
    render() { 

        return ( 
            <div className="voting">
                <div className="button-container">
                    <div className="btn btn-up" onClick={() => this.like()}>
                        <i className="far fa-thumbs-up"></i>
                    </div>
                    <div className="btn btn-down" onClick={() => this.disLike()}>
                        <i className="far fa-thumbs-down"></i>
                    </div>
                </div>

                <div className="total-vote">
                    <p>total vote: <b>{this.props.vote}</b></p>
                </div>
            </div>
         );
    }
}
 
export default VotingComponent;