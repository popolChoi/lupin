/* eslint-disable no-unused-vars */
// project imports
// import config from 'config';

// action - state management
import * as actionTypes from './actions';

export const initialState = {
	test: 0,
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const customizationReducer = (state = initialState, action) => {
	const {type, ...actionCount} = action;
	if(type){
		return {
			...state,
			...actionCount,
		};
	}else {
		return state;
	}
};

export default customizationReducer;