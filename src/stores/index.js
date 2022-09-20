/* eslint-disable no-unused-vars */
import { createStore , applyMiddleware, compose  } from 'redux';
import reducer from './reducer';
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

// ==============================|| REDUX - MAIN STORE ||============================== //
// // 배포 레벨에서는 리덕스 발동시 찍히는 logger를 사용하지 않습니다.
// const enhancer =
//   process.env.NODE_ENV === "production"
//   	? compose(applyMiddleware())
//   	: composeWithDevTools(applyMiddleware(logger));
	
const store = createStore(
	reducer, // 리듀서 들을 정의합니다.
	//middleware: [...middlewares], // 미들웨어를 정의해주도록 합니다.
);
// const persister = 'Free';

export { 
	store, 
	//persister,
};
