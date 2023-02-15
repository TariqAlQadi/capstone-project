import styled from "styled-components";

export const StyledList = styled.ul`
  margin-top: 10px;
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledListItem = styled.li`
  border: 1px solid var(--passive-color);
  border-radius: 5px;
  font-size: 0.8em;
  display: flex;
`;

export const StyledArtist = styled.span`
  color: var(--accent-color);
  font-weight: 500;
`;

export const StyledItemTitle = styled.h2`
  font-size: 1em;
  font-weight: 500;
`;
