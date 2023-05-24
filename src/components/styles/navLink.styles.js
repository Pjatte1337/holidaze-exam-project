import styled from "styled-components";
import { Link } from "react-router-dom";

const NavLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  font-size: 1.2rem;

  :hover {
    color: #000000;
    text-decoration: underline;
  }

  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;

const NavLinkDiv = styled.div`
  color: black;
  text-decoration: none;
  font-size: 1.2rem;
  cursor: pointer;

  :hover {
    color: black;
    text-decoration: underline;
  }

  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;

export { NavLink, NavLinkDiv };
