import React, { Component } from 'react';
import getToApi from './controler/getToApi';
import EmployeeComponent from './components/employee/employeeComponent';
import HeaderComponent from './components/header/headerComponent';
import './App.scss';

class AppComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentWillMount = async () => {
        await getToApi().then(res=>{
            this.sort(res.data);
        });
    }

    sort(data){
        data.employee.sort((a, b) => b.vote - a.vote);
        this.setState({
            data:data
        });
    }

    voteChange(index,vote){
        const data=this.state.data;
        data.employee[index].vote=vote;
        this.sort(data);
    }

    render() {
        const renderEmployee = (
            this.state.data ? this.state.data.employee.map((data,index) => {
               return  <EmployeeComponent index={index}  data={data} key={index} changing={(key,vote) => this.voteChange(key,vote)}/>
            }): <p>No item for showing</p>
        )
        return (
            <div className="container-fluid">
                    <HeaderComponent />

                    <div className="container">
                        { renderEmployee }
                    </div>
            </div>
        );
    }
}

export default AppComponent;


