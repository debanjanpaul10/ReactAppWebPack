import React from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";

import * as actions from "../../Store/Actions";
import LoaderComponent from "../../Common/LoaderComponent";
import { useBoolean } from "../../../Helpers/useBoolean";

/**
 * The Profile Component
 * @param {{ userId: number, name: string}} param The props from parent component
 * @returns {JSX.Element} The React JSX Element
 */
function ProfileComponent({ userId, name }) {
	const dispatch = useDispatch();

	const modalPopup = useBoolean(false);

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
		modalPopup.setTrue();
	};

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
				show={modalPopup.value}
				onHide={modalPopup.setFalse}
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
