import React from 'react';
import { Switch, Route } from "react-router-dom";
import { pants, shirts, images  } from '../shared/data';
import Headers from './Header';
import Footer from './Footer';
import Pants from './Pants';
import Shirts from './Shirts'
import ProductInfo from './ProductInfo';
import Home from './Home';


class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pants: pants,
			shirts : shirts,
			images : images
		}
	}

	render() {
		return (
			<div>
				<Headers />
				<Switch>
					<Route exact path="/" render={() => <Home images={this.state.images} />} />
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