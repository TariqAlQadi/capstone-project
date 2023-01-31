import styled from "styled-components";

export const StyledSection = styled.section`
  margin-bottom: 100px;
`;

export const StyledParagraph = styled.p`
  word-wrap: break-word;
`;

export const StyledDifficulty = styled.span`
  color: ${({ difficulty }) => {
    switch (difficulty) {
      case "beginner":
        return "green";
      case "intermediate":
        return "orange";
      case "advanced":
        return "red";
      default:
        return "darkviolet";
    }
  }};
`;
