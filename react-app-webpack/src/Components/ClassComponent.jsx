import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";

/**
 * The Class Component
 */
class ClassComponent extends Component {
	/**
	 * Initializes the Class Component
	 * @param {Object} props The props from parent component
	 */
	constructor(props) {
		super(props);

		this.state = {
			counter: 0
		}

		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
	}

	increment() {
		this.setState(prevState => ({
			...prevState,
			counter: prevState.counter+1
		}));
	}

	decrement(){
		this.setState(prevState => ({
			...prevState,
			counter: prevState.counter-1
		}));
	}

	/**
	 * Renders the Class Component
	 * @returns {JSX.Element} The React JSX Element
	 */
	render() {
		return (
			<Card style={{ width: 'full' }} className="text-center">
				<Card.Body>
					<Card.Title className="fs-1">I am the Class Component</Card.Title>
					<Card.Subtitle className="mb-2 mt-5 fs-3">Count : {this.state.counter}</Card.Subtitle>
					<Button variant="primary" onClick={this.increment}><i className="bi bi-plus"></i></Button>
					{" "}
					<Button variant="danger" onClick={this.decrement}><i className="bi bi-dash"></i></Button>
				</Card.Body>
			</Card>
		);
	}
}

export default ClassComponent;
