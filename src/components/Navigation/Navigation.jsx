import { NavLink, NavHolder, NavLogo, Nav, MobileNavButton, NavAndCartHolder } from "./Navigation.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useScrollContext } from "../../contexts/ScrollContext";
import Cart from "../cart/Cart";

const Navigation = () => {
	const [navActive, setNavActive] = useState(false);
	const { scrollActive, setScrollActive } = useScrollContext();
	const toggleNav = () => {
		setNavActive(!navActive);
		setScrollActive(!scrollActive);
	}
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
