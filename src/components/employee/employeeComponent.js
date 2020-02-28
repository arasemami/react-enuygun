import React , {Component} from 'react';
import { browserHistory } from 'react-router';
import VotingComponent from '../common/voting/votingComponent';
import './style.scss';

class EmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    voting(vote){
        this.props.onChangeVote(this.props.index,vote);
    }

    viewEmployee(data){
        //  browserHistory.push('/profile')
    browserHistory.push({pathname:'/profile' , state: { data: data}}) 

        console.log(data)
    }
    render() { 
        const { firstName , lastName, jobTitle , avatar , vote } = this.props.data;
        return ( 
            <div className="card" onClick={() => this.viewEmployee(this.props.data)} key>
                <div className="avatar" style={{backgroundImage: 'url(' + avatar  + ')'}}></div>
                <h3>{firstName}</h3>
                <h3>{lastName}</h3>
                <p>{jobTitle}</p>
                <VotingComponent voteClick={(key) => this.voting(key)} vote={vote} />
            </div>
         );
    }
}
 
export default EmployeeComponent;