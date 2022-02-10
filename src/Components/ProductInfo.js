import React from 'react';
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, ButtonGroup, ButtonToolbar, Col, Row, Container } from "reactstrap";
import Cards from "./Card";

const RenderOption = ({ option, selectOption }) => {
	return (
		<div>
			<ButtonToolbar >
				<ButtonGroup>
					<Button style={{ color: 'red', fontWeight: 'bold', fontSize: '1rem', backgroundColor: '#212529' }} onClick={() => selectOption(option)}>
						{option}
					</Button>
				</ButtonGroup>
			</ButtonToolbar>
		</div>
	);
}

const ProductInfo = ({ data }) => {

	const [option, selectOption] = useState();



	const { id } = useParams()
	const found = data.filter(product => product.id === +id)


	const sizes = found[0].sizes.map(s => {
		return (

			<div>
				<RenderOption
					option={s}
					selectOption={selectOption}
				/>
			</div>
		)
	})

	const order = {
		size: option,
		qty: 1,
	}


	return (

		<Container
			className="bg-light border"
			fluid="lg"
		>
			<div >
				<Row>
					<Col sm="8">
						<Cards showButton={false} data={found} />
					</Col>
					<Col sm="4">
						<h1>Sizes</h1>
						{sizes}
						<h1>Qty</h1>
						<ButtonToolbar>
							<ButtonGroup >
								<Button style={{ color: 'red', fontWeight: 'bold', fontSize: '1rem', backgroundColor: '#212529' }} >-</Button>
								<Button style={{ color: 'red', fontWeight: 'bold', fontSize: '1rem', backgroundColor: '#212529' }}>1</Button>
								<Button style={{ color: 'red', fontWeight: 'bold', fontSize: '1rem', backgroundColor: '#212529' }}>+</Button>
							</ButtonGroup>
						</ButtonToolbar>
						<h1>Price : {found[0].price}</h1>

						<h2>Your order</h2>
						<p style={{ fontSize: '1.5rem', fontWeight: 'bold' }} >
							size : {order.size} {" "}
							qty : {order.qty}
						</p>

					</Col>

					<Button style={{ fontSize: '2rem', fontWeight: 'bold' }} color="warning" onClick={() => alert(option)}>Checkout</Button>

				</Row>



			</div>
		</Container>
	);
}

export default ProductInfo;