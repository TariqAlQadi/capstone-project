import styled from "styled-components";

export const StyledDescription = styled.p`
  font-size: 0.8rem;
  font-weight: 300;
`;

export const StyledTitle = styled.h2`
  font-size: 1.2rem;
`;

export const StyledIconNumber = styled.span`
  color: var(--accent-color);
  position: relative;
  top: -10%;
`;

export const StyledBy = styled.span`
  color: black;
  font-weight: 500;
`;

export const StyledSpadesContainer = styled.div`
  transition: 0.5s;
  transform: ${({ rotate }) => (rotate ? "rotate(180deg)" : "rotate(360deg)")};
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

export const StyledSubTitle = styled.h3`
  font-size: 0.9rem;
  position: relative;
  display: flex;
  justify-content: space-between;
`;

export const StyledInfoTitle = styled.h4`
  font-weight: 300;
  font-size: 0.8rem;
  color: var(--accent-color);
  margin-bottom: 5px;
`;

export const StyledInfoText = styled.span`
  color: black;
  font-size: 0.9rem;
`;

export const StyledIconWrapper = styled.div`
  color: var(--accent-color);
  font-size: 0.9rem;
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  position: absolute;
  width: 100%;
`;

export const StyledIcon = styled.span`
  color: black;
  position: relative;
  right: 1.7em;
  bottom: 0;
`;

export const StyledSection = styled.section`
  border: 1px solid var(--passive-color);
  border-radius: 5px;
  padding: 0.5rem;
  max-width: 400px;
  margin: 10px auto 80px;
  position: relative;
`;

export const StyledDescriptionWrapper = styled.div`
  position: relative;
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
  box-shadow: 1px 1px 4px black;

  &:focus {
    outline: 1px solid darkred;
  }
`;

export const StyledLabel = styled.label`
  font-size: 0.8rem;
  color: var(--accent-color);
  font-weight: 300;
`;

export const StyledLine = styled.hr`
  position: relative;
  bottom: 21px;
  border: 1px solid var(--passive-color);
`;
