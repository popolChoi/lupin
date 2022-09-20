import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { counter } from "./reducers/counter";

function Counter(){
	// dispatch를 사용하기 위한 준비
	const dispatch = useDispatch();

	// store에 접근하여 state 가져오기
	const { count } = useSelector(state => state.counter);

	const increse = () => {
		console.log(count);
		dispatch(counter({
			type: "COUNT/INCRESE",
			count: count + 1
		}));
	};
	
	return (
		<React.Fragment>
			<div>{count}<button onClick={() => increse()}>증가</button></div>

		</React.Fragment>
		
	);
};

export default Counter;
 