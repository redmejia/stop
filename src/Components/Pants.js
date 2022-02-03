import Cards from "./Card";

const Pants = ({ pants }) => (
	<div className="container">
		<Cards
			showButton={true}
			data={pants}
			linkTo="/pro/pants/"
		/>
	</div>
)

export default Pants;