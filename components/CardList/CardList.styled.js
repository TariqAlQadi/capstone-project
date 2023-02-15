import styled, { keyframes } from "styled-components";

const appear = keyframes`
  to {
    opacity: 1;
  }
`;

export const StyledList = styled.ul`
  margin-bottom: 140px;
  list-style: none;
  padding: 0;
  opacity: 0;
  animation: ${appear} 0.7s forwards;
`;

export const StyledListItem = styled.li`
  padding: 20px;
  margin-bottom: 10px;
  border: 1px solid var(--passive-color);
  border-radius: 5px;
  position: relative;
`;
