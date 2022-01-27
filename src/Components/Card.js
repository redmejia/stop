import {
	Card, CardImg, CardText, CardBody,
	CardTitle, Button
} from 'reactstrap';

function RederCard({ data }) {
	console.log(data.image);
	return (
		<div>
			<Card>
				<CardImg top width="100%" src={data.image} alt="Cardimage cap" />
				<CardBody>
					<CardTitle>{data.name}</CardTitle>
					<CardText>$ {data.price}</CardText>
					<Button color='success'>Buy</Button>
				</CardBody>
			</Card>
		</div>
	);
}

function Cards(props) {
	const product = props.data.map(data => {
		return (
			<div className="col-md-4 col-lg-4 col-xl-4 my-2">
				<RederCard data={data} />
			</div>
		)
	})
	return (
		<div className='row'>
			{product}
		</div>
	);
}

export default Cards;