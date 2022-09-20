import { combineReducers } from 'redux';
import counter from './customizationReducer';

const reducer = combineReducers({ counter });

export default reducer;
