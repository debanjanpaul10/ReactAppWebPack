import React, { useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";

/**
 * The About Component
 * @returns {JSX.Element} The React JSX Element
 */
function AboutComponent() {
	const [counterInterval, setCounterInterval] = useState(0);

	useEffect(() => {
		setInterval(() => {
			if (counterInterval <= 100 && counterInterval >= 0) {
				setCounterInterval((prevState) => prevState + 1);
			}
		}, 1000);
	}, []);

	return (
		<div className="container">
			<h1 className="m-5">This is the About page!</h1>
			<ProgressBar animated now={counterInterval} />
		</div>
	);
}

export default AboutComponent;
