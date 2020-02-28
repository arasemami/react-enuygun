import React, {Component} from 'react';
import './style.scss';

class VotingComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    voting(key){
        if(key === 'plus')
            this.props.voteClick(this.props.vote + 1);
        else 
            this.props.voteClick(this.props.vote - 1);
    }
    
    render() { 
        const { vote } = this.props;
        return ( 
            <div className="voting">
                <div className="button-container">
                    <div className="btn btn-up" onClick={() => this.voting('plus')}>
                        <i className="far fa-thumbs-up"></i>
                    </div>
                    <div className="btn btn-down" onClick={() => this.voting('min')}>
                        <i className="far fa-thumbs-down"></i>
                    </div>
                </div>

                <div className="total-vote">
                    <p>total vote: <b>{vote}</b></p>
                </div>
            </div>
         );
    }
}
 
export default VotingComponent;