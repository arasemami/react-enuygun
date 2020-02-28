import React , {Component} from 'react';
import './style.scss'
import VotingComponent from '../common/voting/votingComponent';
class EmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    voteChange(vote){
        this.props.changing(this.props.index,vote);
    }
    render() { 
        const { firstName , lastName, jobTitle , avatar , vote } = this.props.data;
        return ( 
            <div className="card" key>
                <div className="avatar" style={{backgroundImage: 'url(' + avatar + ')'}}></div>
                <h2>{firstName} {lastName}</h2>
                <p>{jobTitle}</p>
                <VotingComponent clickA={(key) => this.voteChange(key)} vote={vote} />
            </div>
         );
    }
}
 
export default EmployeeComponent;