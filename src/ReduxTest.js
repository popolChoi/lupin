import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TEST } from 'stores/actions';

function Counter(){
	const dispatch = useDispatch();
	const { test } = useSelector(state => state.counter);
	
	const onClick = () => {
		dispatch({
			type: TEST,
			test: test + 1
		});
	};

	const onClick2 = () => {
		dispatch({
			type: TEST,
			test: test -1
		});
	};
	
	return (
		<React.Fragment>
			<div>{test}<button onClick={() => onClick()}>+</button>  <button onClick={() => onClick2()}>-</button></div>
		</React.Fragment>
		
	);
};

export default Counter;
 