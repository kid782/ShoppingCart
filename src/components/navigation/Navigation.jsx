import { NavLink, NavHolder, NavLogo, Nav, MobileNavButton, NavAndCartHolder } from "./Navigation.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSrollLock } from "../../hooks/hooks";
import Cart from "../cart/Cart";

const Navigation = () => {
	const [navActive, setNavActive] = useState(false);
	const [scrollActive, setScrollActive] = useSrollLock();
	const location = useLocation();

	const toggleNav = () => {
		setNavActive(!navActive);
		setScrollActive(!scrollActive);
	}

	useEffect(() => {
		setScrollActive(true);
		setNavActive(false);

		return () => {
			setScrollActive(false);
			setNavActive(true)
		}
	}, [location])

	return (
		<NavHolder>
			<NavLogo>BLJ SHOP</NavLogo>
			<NavAndCartHolder $active={navActive}>
				<Nav>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/shopping-page">Shop</NavLink>
				</Nav>
				<Cart />
			</NavAndCartHolder>
			<MobileNavButton onClick={toggleNav}>
				<FontAwesomeIcon icon={navActive ? faX : faBars} />
			</MobileNavButton>
		</NavHolder>
	);
};

export default Navigation;
