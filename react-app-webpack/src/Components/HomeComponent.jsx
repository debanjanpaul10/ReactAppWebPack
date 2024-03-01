import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FunctionalComponent from "./FunctionalComponent";
import ClassComponent from "./ClassComponent";
/**
 * The Home Component
 * @returns {JSX.Element} The React JSX Element
 */
function HomeComponent() {
	return (
		<Container>
			<Row>
				<Col>
					<div className="p-2 mt-5">
						<FunctionalComponent />
					</div>
				</Col>
				<Col>
					<div className="p-2 mt-5">
						<ClassComponent />
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default HomeComponent;
