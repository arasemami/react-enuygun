import React, { Component } from 'react';
import FetchData from '../../controler/fetchData';
import EmployeeComponent from '../employee/employeeComponent';
import LoadingComponent from '../common/loading/loadingComponent';
import './style.scss';

class EmployeesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    componentWillMount = async () => {
        await FetchData().then(res => {
            this.sortingData(res.data);
        });
    }

    sortingData(data){
        data.employee.sort((a, b) => b.vote - a.vote);
        this.setState({
            data:data
        });
    }

    voting(index,vote){
        const data = this.state.data;
        data.employee[index].vote=vote;
        this.sortingData(data);
    }

    render() {
        const renderEmployee = (
            this.state.data ? this.state.data.employee.map((data,index) => {
               return  <EmployeeComponent  index={index} data={data} key={index} onChangeVote={(key,vote) => this.voting(key,vote)}/>
            }): <LoadingComponent />
        );

        return (
                <div className="container">
                    { renderEmployee }
                </div>
        );
    }
}
export default EmployeesComponent;