import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  background-color: white;
  text-align: center;
  padding: 15px;
  border-bottom: 1px solid black;
  position: fixed;
  top: 0;
  z-index: 10;
`;

export const StyledLogOutButton = styled.button`
  padding: 7px;
  background: none;
  position: absolute;
  top: 10px;
  right: 10px;
  border: 1px solid black;
  border-radius: 50%;
`;

export const StyledBackButton = styled.button`
  padding: 4px;
  background: none;
  position: absolute;
  top: 10px;
  left: 10px;
  border: 1px solid black;
  border-radius: 50%;
`;
