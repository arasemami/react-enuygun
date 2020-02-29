import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getData} from '../../actions/index';

function SampleComponent() {
	const counter = useSelector(dd => dd.counter);
	const dispatch = useDispatch();
	return(
		<idv>
			<h1>asdadasdasds</h1>
			<h2>{counter}</h2>
			<div onClick={()=> dispatch(getData())}>+</div>
		</idv>
	);
}

export default SampleComponent;
