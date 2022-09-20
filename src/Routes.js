import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import JsonServerTest from './JsonServerTest';
import ReduxTest from './ReduxTest';
import Button from '@mui/material/Button';

const Home = () => {return 'Hello World';};

function RoutesFunction(){
	return (
		<BrowserRouter 
		// basename={initial}
		> 
			<Button href={'https://mui.com/'} >mui</Button>
			<Button href={'https://popolChoi.github.io/lupin'}  >popolChoi.github.io/lupin</Button>

			
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/proxy_test">프록시테스트</Link></li>
				<li><Link to="/redux_test">redux test</Link></li>

			</ul>


			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/proxy_test" element={<JsonServerTest />} />
				<Route path="/redux_test" element={<ReduxTest />} />

			</Routes>
		</BrowserRouter> 
	
            
	) 
}

export default RoutesFunction;

