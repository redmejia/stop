import React from 'react';
import Cards from "./Card";

const Pants = ({ pants }) => (
	<div className="container">
		<Cards
			data={pants}
			linkTo="/pro/pants/"
		/>
	</div>
)

export default Pants;