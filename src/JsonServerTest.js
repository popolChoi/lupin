/* eslint-disable no-unused-vars */
import React, {useState, useEffect } from 'react';
import axios from 'axios';

export default function JsonServerTest(){
	const [count, setCount] = useState({});
	const [count2, setCount2] = useState({});

	useEffect(() => {
		axios.get(`https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD`)
			.then(response => {
				setCount(response.data);
			})
		axios.get(`${process.env.REACT_APP_JSON_SERVER}/react-starter/items`)
			.then(response => {
				setCount2(response.data);
			})
		axios.get(`${process.env.PUBLIC_URL}/json-server/db.json`)
			.then(response => {
				console.log(process.env, response);
			})
	}, []);
	return( 
		<React.Fragment>

			<div>
				<div  className='left' style={{width: '40%'}} >
					<pre>
						{JSON.stringify(count,null, 2)}
					</pre>
				</div>
				<div  className='left' style={{width: '40%'}} >
					<pre>
						{process.env.REACT_APP_JSON_SERVER}
						{JSON.stringify(count2,null, 2)}
					</pre>
				</div>
			</div>
		</React.Fragment>
		
	);
}

