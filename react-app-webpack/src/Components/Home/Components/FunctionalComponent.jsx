import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
/**
 * The Functional Component
 * @param {Object} props The props from parent component
 * @returns {JSX.Element} The React JSX Element
 */
const FunctionalComponent = (props) => {
	const [counter, setCounter] = useState(0);

	/**
	 * The function to increase the counter value
	 */
	const increment = () => {
		setCounter((prevState) => prevState + 1);
	};

	/**
	 * The function to decrease the counter value
	 */
	const decrement = () => {
		setCounter((prevState) => prevState - 1);
	};

	return (
		<Card style={{ width: "full" }} className="text-center" data-bs-theme="dark">
			<Card.Body>
				<Card.Title className="display-4">I am the Functional Component</Card.Title>
				<Card.Subtitle className="mb-2 mt-5 fs-3">
					Count : {counter}
				</Card.Subtitle>
				<Button variant="primary" onClick={increment}>
					<i className="bi bi-plus"></i>
				</Button>{" "}
				<Button variant="danger" onClick={decrement}>
					<i className="bi bi-dash"></i>
				</Button>
			</Card.Body>
		</Card>
	);
};

export default FunctionalComponent;
