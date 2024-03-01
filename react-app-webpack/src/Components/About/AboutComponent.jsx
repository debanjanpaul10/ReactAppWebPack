import React, { useEffect } from "react";
import { Spinner, Stack, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";

import * as actions from "../Store/Actions";
import ProfileComponent from "./Components/ProfileComponent";

/**
 * The About Component
 * @returns {JSX.Element} The React JSX Element
 */
function AboutComponent() {
	const dispatch = useDispatch();

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
		dispatch(actions.GetUsersDataApiAsync());
	}, []);

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
				<div className="text-center">
					<Spinner
						animation="grow"
						role="profiledata"
						className="spinnerStyle"
					/>
					<Spinner
						animation="grow"
						role="profiledata"
						className="spinnerStyle"
					/>
					<Spinner
						animation="grow"
						role="profiledata"
						className="spinnerStyle"
					/>
				</div>
			) : (
				<Stack gap={3} className="mt-5">
					{AboutComponentStoreData.namesData.map((x) => (
						<ProfileComponent
							key={x.id}
							name={x.name}
							email={x.email}
							website={x.website}
							phone={x.phone}
						/>
					))}
				</Stack>
			)}
		</div>
	);
}

export default AboutComponent;
