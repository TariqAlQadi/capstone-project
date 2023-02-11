import styled from "styled-components";
import Image from "next/image";

export const StyledSubtitle = styled.h4`
  padding: 5px;
`;

export const StyledImage = styled(Image)`
  clip-path: polygon(0 13%, 100% 13%, 100% 87%, 0 87%);
`;
