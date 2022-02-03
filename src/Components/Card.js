import {
	Card, CardImg, CardText, CardBody,
	CardTitle, Button
} from 'reactstrap';

import { Link } from "react-router-dom";

function RederCard({ data, showButton  }) {
	return (
		<div>
			<Card>
				<Link to={`/pro/${data.name}/${data.id}`} style={{ color: 'red', textDecoration: 'none' }} >
					<CardImg top width="100%" src={data.image} alt="Cardimage cap" />
					<CardBody>
						<CardTitle>{data.name}</CardTitle>
						<CardText>$ {data.price}</CardText>
						{
							showButton  ?
								<Button color='success'>Buy</Button>
								: null
						}
					</CardBody>
				</Link>
			</Card>
		</div>
	);
}

function Cards(props) {
	const product = props.data.map(data => {
		return (
			<div className="col-md-4 col-lg-4 col-xl-4 my-2" key={data.id}>
				<RederCard data={data} showButton={props.showButton} />
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