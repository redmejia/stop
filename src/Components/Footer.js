import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<>
			<footer className="bg-dark mt-2">
				<div className="container pt-4">
					<div className="row text-danger">
						<div className="col-4 col-sm-2  text-center">
							<h2>Links</h2>
							<h4><Link className="text-danger" to="/pants">Pants</Link></h4>
							<h4><Link className="text-danger" to="/shirts">Shirts</Link></h4>

						</div>
						<div className="col-6 col-sm-3 text-center">
							<h2>Social</h2>
							<h4><a href="https://www.facebook.com"><i className="text-danger fa fa-facebook" /></a></h4>
							<h4><a href="https://www.instagram.com"><i className="text-danger fa fa-instagram"></i></a></h4>
							<h4><a href="https://www.twitter.com"><i className="text-danger fa fa-twitter"></i></a></h4>
						</div>
						<div className=" col-sm-4 text-center">
							<h2>Contact</h2>
							<h4><a className="text-danger" href="tel:+12053535353"><i className="fa fa-phone" /> 12053535353 </a></h4>
							<h4><a className="text-danger" href="mailto:stop@fake.mail.co"><i className="fa fa-envelope-o" /> stop@fake.mail.co  </a> </h4>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;