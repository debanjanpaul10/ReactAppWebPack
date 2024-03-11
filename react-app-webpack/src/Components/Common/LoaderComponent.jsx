import React from "react";
import { Spinner } from "react-bootstrap";

/**
 * The Loader Component
 * @returns {JSX.Element} The React JSX Element
 */
function LoaderComponent() {
	return (
		<div className="text-center">
			<Spinner animation="grow" role="profiledata" className="spinnerStyle" />
			<Spinner animation="grow" role="profiledata" className="spinnerStyle" />
			<Spinner animation="grow" role="profiledata" className="spinnerStyle" />
		</div>
	);
}

export default LoaderComponent;
