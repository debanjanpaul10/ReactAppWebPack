import React from "react";
import { Spinner } from "react-bootstrap";

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
