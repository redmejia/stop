import React, { useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { Link, NavLink } from "react-router-dom";
import Login from './Login';

function HeaderImage() {
	const [showHeader, setShowHeader] = useState(true);
	return (
		<>
			{
				showHeader ?
					<div>
						<img src='/assets/image/unsplash-stop-bags.jpg' alt='headerImage' style={{ width: '100%', height: '100vh', objectFit: 'fill' }} />
						<div className='top-header-text'>
							<span className="text-white text-center bg-dark w-100 p-2"> Stop </span>
							<p className="text-danger text-uppercase  text-sm-left text-md-left text-xl-left d-none d-sm-block">
								final reduction
							</p>
							<p className="text-danger text-uppercase text-sm-left text-md-left text-xl-left">up to 50% off sales</p>
							<div className="row">
								<div className="col text-center">
									<Link onClick={() => setShowHeader(false)} className="btn btn-success text-uppercase text-center font-weight-bold" to="/">shop now</Link>
								</div>
							</div>
						</div>
					</div>
					:
					<div class="jumbotron">
						<div className='container'>
							<span style={{ fontSize: '2rem', fontWeight: 'bold' }} className="text-white text-center bg-dark w-100 p-2"> Stop </span>
							<p style={{ fontSize: '2rem', fontWeight: 'bold' }} className="text-danger text-uppercase  text-sm-left text-md-left text-xl-left d-none d-sm-block">
								final reduction
							</p>
							<hr />
							<p style={{ fontSize: '2rem', fontWeight: 'bold' }} className="text-danger text-uppercase text-sm-left text-md-left text-xl-left">up to 50% off sales</p>
						</div>
					</div>
			}
		</>
	);
}

class Header extends React.Component {
	constructor(props) {
		super(props);

		this.toggleNav = this.toggleNav.bind(this);
		this.state = {
			isNavOpen: false
		};
	}

	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen
		});
	}

	render() {
		return (
			<div>
				<React.Fragment>
					<HeaderImage />
					<Navbar dark sticky="top" expand="md" className='bg-dark'>
						<div className="container d-flex " >
							<NavbarBrand className="ml-auto" href="/"><img src="/assets/stop/stop-log.svg" width="40" alt="stop logo" /></NavbarBrand>
							<NavbarToggler onClick={this.toggleNav} />
							<Collapse className='d-flex justify-content-end' isOpen={this.state.isNavOpen} navbar>
								<Nav navbar>
									<NavItem>
										<NavLink className="nav-link" style={{ color: 'red', fontSize: '1.5rem', fontWeight: 'bold' }} to="/pants">
											Pants{" "}
										</NavLink>
									</NavItem>

									<NavItem>
										<NavLink className="nav-link" style={{ color: 'red', fontSize: '1.5rem', fontWeight: 'bold' }} to="/shirts">
											Shirts {" "}
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink className="nav-link" style={{ color: 'red', fontSize: '1.5rem', fontWeight: 'bold' }} to="/">
											<Login />
										</NavLink>
									</NavItem>
								</Nav>
							</Collapse>
						</div>
					</Navbar>
				</React.Fragment>
			</div>
		);
	}
}

export default Header