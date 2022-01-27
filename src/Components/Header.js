import React from 'react';
import { Nav, Navbar, NavbarBrand, NavLink, NavbarToggler, Collapse, NavItem } from 'reactstrap';

function HeaderStopImage() {
	// carousel
	return (
		<>
			<img src='/assets/image/unsplash-stop-bags.jpg' alt='headerImage' style={{ width: '100%', height: '100vh', objectFit: 'fill' }} />
			<div className='top-header-text'>
				<span class="text-white text-center bg-dark w-100 p-2"> Stop </span>
				<p class="text-danger text-uppercase  text-sm-left text-md-left text-xl-left d-none d-sm-block">
					final reduction
				</p>
				<p class="text-danger text-uppercase text-sm-left text-md-left text-xl-left">up to 50% off sales</p>
				<div class="row">
					<div class="col text-center">
						{/* links this button to the link to the products cards */}
						<a href="#product" class="btn btn-success text-uppercase text-center font-weight-bold"> shop now
						</a>
					</div>
				</div>
			</div>
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
			<React.Fragment>
				<HeaderStopImage />
				<Navbar dark sticky="top" expand="md" className='bg-dark'>
					<div className="container d-flex justify-content-between" >
						<NavbarBrand className="mr-auto" href="/"><img src="/assets/stop/stop-log.svg" width="40" alt="stop logo" /></NavbarBrand>
						<NavbarToggler onClick={this.toggleNav} />
						<Collapse className='d-flex flex-row-reverse' isOpen={this.state.isNavOpen} navbar>
							<Nav navbar>
								<NavItem>
									<NavLink style={{ color: 'red', fontSize : '1.5rem', fontWeight :'bold' }} href='#'>
										login
									</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</div>
				</Navbar>
			</React.Fragment>
		);
	}
}

export default Header