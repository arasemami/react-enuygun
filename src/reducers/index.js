import { combineReducers } from 'redux';
import employeesReducer from './employees';

const allReducers= combineReducers({
	employees: employeesReducer
});

export default allReducers;
