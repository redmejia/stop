import React from 'react';
import { Switch, Route } from "react-router-dom";
import { pants, shirts } from '../shared/data';
import Headers from './Header';
import Footer from './Footer';
import Pants from './Pants';
import Shirts from './Shirts'
import ProductInfo from './ProductInfo';


class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pants: pants,
			shirts : shirts,
		}
	}

	render() {
		return (
			<div>
				<Headers />
				<Switch>
					<Route path="/pants" render={() => <Pants pants={this.state.pants} />} />
					<Route path="/shirts" render={() => <Shirts  shirts={this.state.shirts} />} />
					<Route exact path="/pro/pants/:name/:id" render={() => <ProductInfo data={this.state.pants} />} />
					<Route exact path="/pro/shirts/:name/:id" render={() => <ProductInfo data={this.state.shirts} />} />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default Main;