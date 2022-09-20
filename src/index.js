import React from 'react';
import ReactDOM from 'react-dom/client';

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

import App from './App';
import './resource/css/index.scss';

// 배포 레벨에서는 리덕스 발동시 찍히는 logger를 사용하지 않습니다.
const enhancer =
  process.env.NODE_ENV === "production"
  	? compose(applyMiddleware())
  	: composeWithDevTools(applyMiddleware(logger));
	
// 위에서 만든 reducer를 스토어 만들때 넣어줍니다
const store = createStore(rootReducer, enhancer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// const reportWebVitals = onPerfEntry => {
// 	if (onPerfEntry && onPerfEntry instanceof Function) {
// 		import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
// 			getCLS(onPerfEntry);
// 			getFID(onPerfEntry);
// 			getFCP(onPerfEntry);
// 			getLCP(onPerfEntry);
// 			getTTFB(onPerfEntry);
// 		});
// 	}
// };
// reportWebVitals();
 