/* eslint-disable no-unused-vars */
import React, {useState, useEffect } from 'react';
import axios from 'axios';
import jsonServer from './json-server/db.json';

export default function JsonServerTest(){
	const [count, setCount] = useState({});
	const [count2, setCount2] = useState({});

	useEffect(() => {
	
		axios.get(`/site/program/financial/exchangeJSON?authkey=A8Vnsrd49EgGAzVTkrQZkgBHjfwRyNMT&searchdate=20180102&data=AP01`)
			.then(response => {
				setCount(response.data);
			})
		axios.get(`${process.env.REACT_APP_JSON_SERVER}/json-server/exchange-rate/?searchdate=18000101`)
			.then(response => {
				// setCount2(response.data);
				setCount2(jsonServer);

				
			})
			.catch(() =>{
				setCount2(jsonServer['exchange-rate'][18000101]);

			})
		// axios.get(`${process.env.PUBLIC_URL}/json-server/db.json`)
		// 	.then(response => {
		// 		console.log(process.env, response);
		// 	})
	}, []);
	return( 
		<React.Fragment>

			<div>
				<div  className='left' style={{width: '40%'}} >
					<pre>
						https://www.koreaexim.go.kr<br/>
						{JSON.stringify(count,null, 2)}
					</pre>
				</div>
				<div  className='left' style={{width: '40%'}} >
					<pre>
						{process.env.REACT_APP_JSON_SERVER}<br/>
						{JSON.stringify(count2,null, 2)}
					</pre>
				</div>
			</div>
		</React.Fragment>
		
	);
}

