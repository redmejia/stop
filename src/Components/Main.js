import React from 'react';
import { Switch, Route } from "react-router-dom";
import { pants } from '../shared/data';
import Headers from './Header';
import Footer from './Footer';
import Pants from './Pants';
import ProductInfo from './ProductInfo';




class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pants: pants,
		}
	}
	
	render() {
		return (
			<div>
				<Headers />
				<Switch>
					<Route  path="/pants" render={() => <Pants pants={this.state.pants} />} />
					<Route path="/pro/:name/:id" render={()=> <ProductInfo data={this.state.pants} />} />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default Main;