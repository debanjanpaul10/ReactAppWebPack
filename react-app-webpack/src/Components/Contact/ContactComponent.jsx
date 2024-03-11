import React, { useState } from "react";
import {
	Button,
	Form,
	FormControl,
	FormGroup,
	FormLabel,
	Row,
	Col,
	Modal,
} from "react-bootstrap";
import { useBoolean } from "../../Helpers/useBoolean";

/**
 * The Contact Component
 * @returns {JSX.Element} The React JSX Element
 */
function ContactComponent() {
	const [formData, setFormData] = useState({
		Name: "",
		Email: "",
		Subject: "",
		Message: "",
	});

	const modalPopup = useBoolean(false);

	/**
	 * Handles the event change
	 * @param {Event} event The event type
	 */
	const onInputChange = (event) => {
		setFormData({
			...formData,
			[event.target.id]: event.target.value,
		});
	};

	/**
	 * Handles the submit data functionality
	 */
	const submitData = () => {
		console.log(formData);
		modalPopup.setTrue();
		setFormData({
			Name: "",
			Email: "",
			Subject: "",
			Message: "",
		});
	};

	return (
		<>
			<div className="container-fluid">
				<h2 className="display-4">Contact us!</h2>
				<br />
				<div className="form" id="contact-us-form">
					<Form>
						<FormGroup as={Row} className="mb-3">
							<FormLabel column sm={2}>
								Name
							</FormLabel>
							<Col sm={10}>
								<FormControl
									type="text"
									placeholder="What's your name?"
									id="Name"
									onChange={onInputChange}
								/>
							</Col>
						</FormGroup>

						<FormGroup as={Row} className="mb-3">
							<FormLabel column sm={2}>
								Email Address
							</FormLabel>
							<Col sm={10}>
								<FormControl
									type="email"
									placeholder="What's your email address?"
									id="Email"
									onChange={onInputChange}
								/>
							</Col>
						</FormGroup>

						<FormGroup as={Row} className="mb-3">
							<FormLabel column sm={2}>
								Subject
							</FormLabel>
							<Col sm={10}>
								<FormControl
									type="text"
									placeholder="What's the context of your message?"
									id="Subject"
									onChange={onInputChange}
								/>
							</Col>
						</FormGroup>

						<FormGroup as={Row} className="mb-3">
							<FormLabel column sm={2}>
								Message
							</FormLabel>
							<Col sm={10}>
								<FormControl
									as="textarea"
									rows={3}
									placeholder="What's your actual message?"
									id="Message"
									onChange={onInputChange}
								/>
							</Col>
						</FormGroup>

						<br />

						<Button variant="warning" onClick={submitData}>
							Submit
						</Button>
					</Form>
				</div>
			</div>

			<Modal data-bs-theme="dark"
				show={modalPopup.value}
				onHide={modalPopup.setFalse}
				backdrop="static"
				keyboard={false}
				centered
			>
				<Modal.Header closeButton></Modal.Header>
				<Modal.Body className="text-center display-4 text-white">
					<p>Information has been sent!</p>
				</Modal.Body>
			</Modal>
		</>
	);
}

export default ContactComponent;
