import React from "react";
import { Navbar, NavbarBrand, Nav, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

/**
 * The Navigation Component
 * @returns {JSX.Element} The React JSX Element
 */
function NavigationComponent() {
	return (
		<Navbar className="bg-body-tertiary p-2" data-bs-theme="dark">
			<NavbarBrand>React Application</NavbarBrand>
			<Nav className="me-auto">
				<NavLink as={Link} to="/">
					Home
				</NavLink>
				<NavLink as={Link} to="/About">
					About
				</NavLink>
				<NavLink as={Link} to="/Contact">
					Contact Us!
				</NavLink>
			</Nav>
		</Navbar>
	);
}

export default NavigationComponent;