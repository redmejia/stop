import React from 'react';
import { Switch, Route } from "react-router-dom";
import { pants, shirts, images  } from '../shared/data';
import Headers from './Header';
import Footer from './Footer';
import Pants from './Pants';
import Shirts from './Shirts'
import ProductInfo from './ProductInfo';
import Home from './Home';
import { connect } from "react-redux";


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
		console.log(this.props.pants)
		return (
			<div>
				<Headers />
				<Switch>
					<Route exact path="/" render={() => <Home images={this.props.images} />} />
					<Route path="/pants" render={() => <Pants pants={this.props.pants} />} />
					<Route path="/shirts" render={() => <Shirts  shirts={this.props.shirts} />} />
					<Route exact path="/pro/pants/:name/:id" render={() => <ProductInfo data={this.props.pants} />} />
					<Route exact path="/pro/shirts/:name/:id" render={() => <ProductInfo data={this.props.shirts} />} />
				</Switch>
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return{
		images : state.images, 
		pants : state.pants,
		shirts : state.shirts
	}
}
export default connect(mapStateToProps, null)(Main);