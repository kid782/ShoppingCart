import { NavLink as BaseNavLink } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../style/variables";

export const NavLink = styled(BaseNavLink)`
  color: ${colors.gray};
  text-decoration: none;
  &.active {
    font-weight: bold;
  }
  & + & {
    margin-left: 20px;
  }
`;
