import React from "react";
import { Route, Routes } from "react-router-dom";

import HomeComponent from "./HomeComponent";
import "../Styles/App.scss";
import AboutComponent from "./About/AboutComponent";
import NavigationComponent from "./NavigationComponent";


/**
 * The Main App Component
 * @returns {JSX.Element} The React JSX Element
 */
function App() {
	return (
		<div data-bs-theme="dark">
			<NavigationComponent />
			<Routes>
				<Route path="/" element={<HomeComponent />} />
				<Route path="/About" element={<AboutComponent />} />
			</Routes>
		</div>
	);
}

export default App;
