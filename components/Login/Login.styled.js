import styled from "styled-components";

export const StyledSection = styled.section`
  padding: 10px;
  margin: 10px;
  text-align: center;
  border: 1px solid lightgrey;
  border-radius: 5px;
  position: relative;
`;

export const ClubsWrapper = styled.div`
  rotate: -45deg;
  position: absolute;
  left: 3px;
  top: 3px;
`;
export const HeartsWrapper = styled.div`
  rotate: 45deg;
  position: absolute;
  right: 3px;
  top: 3px;
`;

export const SpadesWrapper = styled.div`
  rotate: 135deg;
  position: absolute;
  bottom: 3px;
  right: 3px;
`;

export const DiamondsWrapper = styled.div`
  rotate: 45deg;
  position: absolute;
  left: 3px;
  bottom: 3px;
`;

export const StyledTitle = styled.h2`
  color: var(--accent-color);
  font-size: 3em;
  margin: 0;
`;

export const StyledGreeting = styled.h1`
  font-size: 1.5em;
  margin: 0;
`;

export const StyledHighlight = styled.span`
  color: var(--accent-color);
  font-weight: bold;
`;
