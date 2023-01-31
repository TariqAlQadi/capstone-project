import styled from "styled-components";
import Link from "next/link";

export const StyledNavigation = styled.nav`
  position: fixed;
  bottom: 0;
  background-color: white;
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;
`;

export const StyledNavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: currentColor;

  :hover {
    filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.7));
  }
`;
