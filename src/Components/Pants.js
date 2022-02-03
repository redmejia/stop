import Cards from "./Card";

const Pants = ({ pants }) => (
	<div className="container">
			<Cards showButton={true} data={pants} />
	</div>
)

export default Pants;