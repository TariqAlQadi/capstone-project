import styled from "styled-components";
import Image from "next/image";

export const StyledSubtitle = styled.h4`
  padding: 5px;
  color: var(--accent-color);
`;

export const StyledImage = styled(Image)`
  clip-path: polygon(0 13%, 100% 13%, 100% 87%, 0 87%);
`;

export const StyledTopLine = styled.hr`
  position: relative;
  top: 18px;
  width: 250px;
  border: 1px solid var(--passive-color);
`;

export const StyledBottomLine = styled.hr`
  position: relative;
  bottom: 20px;
  width: 250px;
  border: 1px solid var(--passive-color);
`;
