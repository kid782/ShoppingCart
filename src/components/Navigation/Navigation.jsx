import { NavLink, NavHolder, NavLogo, Nav } from "./Navigation.styled";
import Cart from "../Cart/Cart";

const Navigation = () => {
	return (
		<NavHolder>
			<NavLogo>BLJ SHOP</NavLogo>
			<Nav>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/shopping-page">Shop</NavLink>
			</Nav>
			<Cart />
		</NavHolder>
	);
};

export default Navigation;
