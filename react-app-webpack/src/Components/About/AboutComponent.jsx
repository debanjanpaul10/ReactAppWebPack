import React, { useEffect } from "react";
import { Spinner, Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

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
	const AboutComponentStoreData = useSelector(({ RootReducer }) => {
		return {
			namesData: RootReducer.namesData,
			isLoading: RootReducer.isLoading,
		};
	});

	useEffect(() => {
		dispatch(actions.GetUsersDataApiAsync());
	}, []);

	return (
		<div className="container">
			<h1 className="mt-5 mb-3 text-center display-4">This is the About page!</h1>
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
				<Stack gap={3}>
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
