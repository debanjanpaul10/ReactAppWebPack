import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../Store/Actions";
import { createSelector } from "reselect";
import LoaderComponent from "../../Common/LoaderComponent";

/**
 * The Profile Component
 * @param {{ userId: number, name: string}} param The props from parent component
 * @returns {JSX.Element} The React JSX Element
 */
function ProfileComponent({ userId, name }) {
	const dispatch = useDispatch();

	const [showModal, setShowModal] = useState(false);

	/**
	 * Gets the Profile Component Redux Store Data
	 */
	const ProfileStoreData = useSelector(
		createSelector(
			[(state) => state.RootReducer],
			({ userData, isModalLoading }) => ({
				userData,
				isModalLoading,
			})
		)
	);

	/** Shows the modal */
	const handleShow = () => {
		dispatch(actions.GetUsersDataByIdApiAsync(userId));
		setShowModal(true);
	};
	/** Hides the modal */
	const handleClose = () => setShowModal(false);

	return (
		<>
			<span
				id="profiledata"
				onClick={handleShow}
				className="text-center lead pointer_cursor"
			>
				{name}
			</span>

			<Modal
				show={showModal}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}
				centered
			>
				{ProfileStoreData.isModalLoading ? (
					<LoaderComponent />
				) : (
					<>
						<Modal.Header closeButton>
							<Modal.Title className="text-center display-4">
								{ProfileStoreData.userData.name}
							</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<p className="lead">
								<b>Email</b> {ProfileStoreData.userData.email}
							</p>
							<p className="lead">
								<b>Phone</b> {ProfileStoreData.userData.phone}
							</p>
							<p className="lead">
								<b>Website</b> {ProfileStoreData.userData.website}
							</p>
						</Modal.Body>
					</>
				)}
			</Modal>
		</>
	);
}

export default ProfileComponent;
