import styled, { keyframes } from "styled-components";
import Image from "next/image";

const appear = keyframes`
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const StyledSection = styled.section`
  padding: 0.5em;
  margin: 0.5em;
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
  right: 0.3em;
  top: 0.3em;
`;

export const SpadesWrapper = styled.div`
  rotate: 135deg;
  position: absolute;
  bottom: 0.3em;
  right: 0.3em;
`;

export const DiamondsWrapper = styled.div`
  rotate: 45deg;
  position: absolute;
  left: 0.3em;
  bottom: 0.3em;
`;

export const StyledTitle = styled.h2`
  color: var(--accent-color);
  font-size: 2.8em;
  margin: 0;
  font-family: var(--lobster-font);
  opacity: 0;
  animation: ${appear} 1s 0.3s forwards;
  transform: scale(0.8);
`;

export const StyledGreeting = styled.h1`
  font-size: 1.5em;
  margin: 0;
  opacity: 0;
  animation: ${appear} 1s forwards;
  transform: scale(0.8);
`;

export const StyledHighlight = styled.span`
  color: var(--accent-color);
  font-weight: bold;
`;

export const StyledIntroText = styled.p`
  opacity: 0;
  animation: ${appear} 1s 0.4s forwards;
  transform: scale(0.8);
`;

export const StyledImage = styled(Image)`
  opacity: 0;
  animation: ${appear} 1s 0.4s forwards;
`;
