import React from 'react';
import Cards from "./Card";

const Pants = ({ pants }) => {
	// console.log("your data", pants.pants);
	// const[data] = pants.pants
	// console.log("data her > ", data);
	return (
		<div className="container">
			<Cards
				data={pants}
				linkTo="/pro/pants/"
			/>
		</div>

	)
}

export default Pants;