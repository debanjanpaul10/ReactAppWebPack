import React, { useState } from "react";
import { Modal } from "react-bootstrap";

/**
 * The Profile Component
 * @param {{ name: string, email: string,
 *  website: string, phone: number}} param The props from parent component
 * @returns {JSX.Element} The React JSX Element
 */
function ProfileComponent({ name, email, website, phone }) {
	const [showModal, setShowModal] = useState(false);

    /** Shows the modal */
	const handleShow = () => setShowModal(true);
    /** Hides the modal */
	const handleClose = () => setShowModal(false);

	return (
		<>
			<span id="profiledata" onClick={handleShow} className="text-center lead pointer_cursor">
				{name}
			</span>

			<Modal show={showModal} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title className="text-center display-4">{name}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p className="lead">
						<b>Email</b> {email}
					</p>
					<p className="lead">
						<b>Phone</b> {phone}
					</p>
					<p className="lead">
						<b>Website</b> {website}
					</p>
				</Modal.Body>
			</Modal>
		</>
	);
}

export default ProfileComponent;
