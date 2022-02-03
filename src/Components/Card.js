import {
	Card, CardImg, CardText, CardBody,
	CardTitle, Button
} from 'reactstrap';

import { Link } from "react-router-dom";

const RenderCard = ({ data, showButton, linkTo }) => {
	console.log(linkTo);
	return (
		<div>
			{
				linkTo ?
					<Card>
						<Link to={`${linkTo}${data.name}/${data.id}`} style={{ color: 'red', textDecoration: 'none' }} >
							<CardImg top width="100%" src={data.image} alt="Cardimage cap" />
							<CardBody>
								<CardTitle>{data.name}</CardTitle>
								<CardText>$ {data.price}</CardText>
								{
									showButton ?
										<Button color='success'>Buy</Button>
										: null
								}
							</CardBody>
						</Link>
					</Card>
					:
					// link to is after click link undefined
					<Card>
						<CardImg top width="100%" src={data.image} alt="Cardimage cap" />
						<CardBody>
							<CardTitle>{data.name}</CardTitle>
							<CardText>$ {data.price}</CardText>
						</CardBody>
					</Card>

			}
		</div>
	);
}

const Cards = (props) => {
	const product = props.data.map(data => {
		return (
			<div className="col-md-4 col-lg-4 col-xl-4 my-2" key={data.id}>
				<RenderCard
					data={data}
					showButton={props.showButton}
					linkTo={props.linkTo}
				/>
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