import React from 'react';

import {data} from '../shared/data';
import Cards from './Card';

class Main extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			data : data,
		}
	}
	render(){
		return(
		<div className='container'>
			<Cards data={this.state.data} />
		</div>
		);
	}
}

export default Main;