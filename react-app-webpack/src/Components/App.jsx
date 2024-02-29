import React from "react";
import FunctionalComponent from "./FunctionalComponent";
import ClassComponent from "./ClassComponent";
import "../Styles/App.scss";
import { Container, Row, Col } from "react-bootstrap";
/**
 * The Main App Component
 * @returns {JSX.Element} The React JSX Element
 */
function App() {
	return (
		<div data-bs-theme="dark">
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
		</div>
	);
}

export default App;
