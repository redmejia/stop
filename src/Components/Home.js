import React from 'react';
import { Row, Col, Container, UncontrolledCarousel } from "reactstrap";

const Home = ({ images }) => {
	return (

		<Container className="mt-2 bg-light border"
			fluid="md">
			<Row>
				<Col md="4" style={{ backgroundColor: '#212129' }}>
					<div className="arrivals text-center" >
						<span className=" text-white"> New </span>
						<p className="text-danger text-uppercase text-sm-left text-md-left text-xl-left">Arrivals</p>
					</div>
				</Col>
				<Col md="8" >
					<UncontrolledCarousel items={images} />
				</Col>
			</Row>
		</Container>
	);

}

export default Home;