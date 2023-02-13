import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  padding: 10px;
  background-color: white;
  text-align: center;
  border-bottom: 1px solid var(--passive-color);
  border-radius: 20px;
  position: fixed;
  top: 0;
  z-index: 10;
  transform: translateY(-10px);
  font-family: var(--lobster-font);
`;

export const StyledHeading = styled.h1`
  font-size: 2em;
  color: var(--accent-color);
  padding-top: 10px;
`;
