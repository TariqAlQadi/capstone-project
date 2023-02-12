import styled from "styled-components";

export const StyledSection = styled.section`
  margin-top: 20px;
  border: 1px solid var(--passive-color);
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 85px;
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

export const StyledNoteForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyledTextArea = styled.textarea`
  background: lightyellow;
  padding: 10px;
  border: none;
  border-radius: 5px;
  width: 100%;
  resize: none;
  min-height: 180px;
  box-shadow: 1px 1px 5px black;
`;
