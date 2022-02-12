import React from 'react';
import { Switch, Route } from "react-router-dom";
import Headers from './Header';
import Footer from './Footer';
import Pants from './Pants';
import Shirts from './Shirts'
import ProductInfo from './ProductInfo';
import Home from './Home';
import { connect } from "react-redux";
import { fetchPantsProduct, fetchShirtsProduct, fetchImagesArrivalsProduct } from "../redux/ActionCreators";



class Main extends React.Component {
	
	componentDidMount(){
		this.props.fetchPantsProduct()
		this.props.fetchShirtsProduct()
		this.props.fetchImagesArrivalsProduct()
	}

	render() {
		return (
			<div>
				<Headers />
				<Switch>
					<Route exact path="/" render={() => <Home images={this.props.images.images} />} />
					<Route path="/pants" render={() => <Pants pants={this.props.pants.pants} />} />
					<Route path="/shirts" render={() => <Shirts  shirts={this.props.shirts.shirts} />} />
					 <Route exact path="/pro/pants/:name/:id" render={() => <ProductInfo data={this.props.pants.pants} />} />
					<Route exact path="/pro/shirts/:name/:id" render={() => <ProductInfo data={this.props.shirts.shirts} />} />
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

const mapDispatchToProps = {
	fetchPantsProduct,
	fetchShirtsProduct,
	fetchImagesArrivalsProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);