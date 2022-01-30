import {  useParams } from "react-router-dom";
import Cards from "./Card";
const ProductInfo = ({data}) => {
	const { id  } = useParams()
	const found = data.filter(product => product.id === +id)
	return(
		<div className="container">
			<Cards showButton={false} data={found} />
		</div>
	);
}
	
export default ProductInfo;