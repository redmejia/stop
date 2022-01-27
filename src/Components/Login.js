import React from 'react';
import {
	Form, FormGroup, Label, Input, Button,
	Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false
		};

		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState({
			modal: !this.state.modal
		});
	}

	render() {
		return (
			<div>
				<Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
				<Modal size='xl' isOpen={this.state.modal} toggle={this.toggle}>
					<ModalHeader toggle={this.toggle} className='bg-dark '>
						<img className='ml-auto' src="/assets/stop/stop-log.svg" width="40" alt="stop logo" />
					</ModalHeader>
					<ModalBody>
						<div className='row'>
							<div className='col'>
								<h5 className="ml-auto">Login</h5>
								<Form>
									<FormGroup>
										<Label for="exampleEmail">Email</Label>
										<Input type="email" name="email"  placeholder="Email" />
									</FormGroup>
									<FormGroup>
										<Label for="examplePassword">Password</Label>
										<Input type="password" name="password" placeholder="Password" />
									</FormGroup>
									<Button color='success' onClick={this.toggle}>Login</Button>
								</Form>
							</div>
							<div className='col'>
								<h5 className="ml-auto">Register</h5>
								<Form>
									<FormGroup>
										<Label for="exampleEmail">Full Name</Label>
										<Input type="text" name="fullName" placeholder="Full Name" />
									</FormGroup>
									<FormGroup>
										<Label for="exampleEmail">Email</Label>
										<Input type="email" name="email" placeholder="Email" />
									</FormGroup>
									<FormGroup>
										<Label for="examplePassword">Password</Label>
										<Input type="password" name="password" placeholder="Password" />
									</FormGroup>
									<Button color='success' onClick={this.toggle}>Register</Button>
								</Form>
							</div>
						</div>
					</ModalBody>
					<ModalFooter>
						<Button color="danger" onClick={this.toggle}>Cancel</Button>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}
export default Login;