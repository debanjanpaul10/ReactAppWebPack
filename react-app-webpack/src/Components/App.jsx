import React from "react";
import { Route, Routes } from "react-router-dom";

import HomeComponent from "./Home/HomeComponent";
import "../Styles/App.scss";
import AboutComponent from "./About/AboutComponent";
import NavigationComponent from "./Common/NavigationComponent";
import ContactComponent from "./Contact/ContactComponent";

/**
 * The Main App Component
 * @returns {JSX.Element} The React JSX Element
 */
function App() {
	return (
		<div>
			<NavigationComponent />
			<Routes>
				<Route index element={<HomeComponent />} />
				<Route path="/About" element={<AboutComponent />} />
				<Route path="/Contact" element={<ContactComponent />} />
			</Routes>
		</div>
	);
}

export default App;
