import FetchData from '../controler/fetchData';


 

const employeesReducer = ( state = [] , action) => {
 
	switch(action.type){
	case 'GET_DATA':
		return FetchData().then(res => {
			return res.data;
		}); 
	default:
		return state;
	}
};

export default employeesReducer;
