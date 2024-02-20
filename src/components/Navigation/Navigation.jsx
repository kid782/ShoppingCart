import { NavLink } from "./styledNavigation";

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/shopping-page">
        Shop
      </NavLink>
    </nav>
  );
};

export default Navigation;
