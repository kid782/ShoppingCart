import { NavLink as BaseNavLink } from "react-router-dom";
import styled from "styled-components";

const NavLink = styled(BaseNavLink)`
  color: blue;
  &.active {
    color: red;
  }
  & + & {
    margin-left: 20px;
  }
`;

const Navigation = () => {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        HOME
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        ABOUT
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        PROFILE
      </NavLink>
    </nav>
  );
};

export default Navigation;
