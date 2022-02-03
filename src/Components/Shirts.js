import Cards from "./Card";
const Shirts = ({shirts}) =>(
	<div className="container">
			<Cards 
				showButton={true} 
				data={shirts} 
				linkTo="/pro/shirts/"	
			/>
	</div>
)


export default Shirts;