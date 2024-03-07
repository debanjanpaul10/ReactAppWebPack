import React, { useEffect } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";

import * as actions from "../Store/Actions";
import ProfileComponent from "./Components/ProfileComponent";
import LoaderComponent from "../Common/LoaderComponent";

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
				<LoaderComponent />
			) : (
				<div className="mt-5 text-center">
					{AboutComponentStoreData.namesData.map((x) => (
						<div className="mb-3">
							<ProfileComponent
								key={x.id}
								userId={x.id}
								name={x.name}
								email={x.email}
								website={x.website}
								phone={x.phone}
							/>
							<br />
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default AboutComponent;
