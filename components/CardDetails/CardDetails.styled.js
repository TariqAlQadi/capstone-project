import styled, { css } from "styled-components";

export const StyledSection = styled.section`
  margin-bottom: 100px;
`;

export const StyledParagraph = styled.p`
  word-wrap: break-word;
`;

export const StyledDifficulty = styled.span`
  ${({ difficulty }) => {
    if (difficulty === "beginner") {
      return css`
        color: green;
      `;
    } else if (difficulty === "intermediate") {
      return css`
        color: orange;
      `;
    } else if (difficulty === "advanced") {
      return css`
        color: red;
      `;
    } else {
      return css`
        color: darkviolet;
      `;
    }
  }}
`;
