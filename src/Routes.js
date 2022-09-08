import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import JsonServerTest from './JsonServerTest';
import Button from '@mui/material/Button';

function RoutesFunction(){
	return (
		<BrowserRouter 
		// basename={initial}
		> 
			<Button href={'https://mui.com/'}  target="_blank" >emotion</Button>

			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/proxy_test">프록시테스트</Link></li>
			</ul>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/proxy_test" element={<JsonServerTest />} />
			</Routes>
		</BrowserRouter> 
	
            
	) 
}

export default RoutesFunction;

const Home = () => {return 'Hello World';};
