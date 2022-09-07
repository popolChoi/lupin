import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import JsonServerTest from './JsonServerTest';

function RoutesFunction(){
	return (
		<BrowserRouter 
		// basename={initial}
		> 
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/REACT_APP_JSON_SERVER">REACT_APP_JSON_SERVER</Link></li>
			</ul>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/REACT_APP_JSON_SERVER" element={<JsonServerTest />} />
			</Routes>
		</BrowserRouter> 
	
            
	) 
}

export default RoutesFunction;

const Home = () => {return 'Hello World';};
