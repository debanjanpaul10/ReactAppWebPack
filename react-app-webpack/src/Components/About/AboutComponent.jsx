import React, { useEffect, useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";

import * as actions from "../Store/Actions";
import ProfileComponent from "./Components/ProfileComponent";
import LoaderComponent from "../Common/LoaderComponent";

/**
 * The About Component
 * @returns {JSX.Element} The React JSX Element
 */
function AboutComponent() {
	const dispatch = useDispatch();

	const [namesData, setNamesData] = useState([]);

	/**
	 * Gets the About Component Redux Store Data
	 */
	const AboutComponentStoreData = useSelector(
		createSelector(
			[(state) => state.RootReducer],
			({ namesData, isLoading }) => ({
				namesData,
				isLoading,
			})
		)
	);

	useEffect(() => {
		if (AboutComponentStoreData.namesData.length === 0) {
			dispatch(actions.GetUsersDataApiAsync());
		}
	}, []);

	useEffect(() => {
		if (AboutComponentStoreData.namesData !== namesData) {
			setNamesData(AboutComponentStoreData.namesData);
		}
	}, [AboutComponentStoreData.namesData])

	return (
		<div className="container">
			<div className="text-center">
				<OverlayTrigger
					delay={{ show: 250, hide: 350 }}
					placement={"bottom"}
					overlay={
						<Tooltip id="tooltip-header" className="text-center">
							Click on the names to see their details
						</Tooltip>
					}
				>
					<h1 className="text-center display-4 mb-5">
						This is the About page!
					</h1>
				</OverlayTrigger>
			</div>

			{AboutComponentStoreData.isLoading ? (
				<LoaderComponent />
			) : (
				<div className="mt-5 text-center">
					{AboutComponentStoreData.namesData.map((x) => (
						<div className="mb-3" key={x.id}>
							<ProfileComponent userId={x.id} name={x.name} />
							<br />
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default AboutComponent;
