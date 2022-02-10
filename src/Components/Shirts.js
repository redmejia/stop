import React from 'react';
import Cards from "./Card";
const Shirts = ({shirts}) =>(
	<div className="container">
			<Cards 
				data={shirts} 
				linkTo="/pro/shirts/"	
			/>
	</div>
)


export default Shirts;