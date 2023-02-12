import css from "styled-jsx/css";
import styled from "styled-components";

const StyledButton = styled.button`
  text-decoration: none;
  color: currentColor;
  border: none;
  transition: 0.5s;
  padding: 0;
  background: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${({ variant, isActive }) => {
    if (variant === "navButton") {
      return css`
        flex-direction: column;
        gap: 0.5rem;
        transform: ${isActive ? "translateY(-7px)" : "0"};
        height: 100%;
        &::after {
          position: absolute;
          transform: ${isActive ? "translateY(25px)" : "translateY(30px)"};
          opacity: ${isActive ? "1" : "0"};
          content: "";
          transition: 0.4s;
          width: 35px;
          height: 4px;
          border-radius: 2px;
          background-color: var(--accent-color);
        }
      `;
    }
    if (variant === "random") {
      return css`
        padding: 5px;
        border: 1px solid black;
        border-radius: 50%;
        &:focus {
          outline: 1px solid var(--accent-color);
        }
      `;
    }
    if (variant === "back") {
      return css`
        padding: 4px;
        background: none;
        position: absolute;
        top: 10px;
        left: 10px;
        border: 1px solid black;
        border-radius: 50%;
      `;
    }
    if (variant === "logOut") {
      return css`
        padding: 7px;
        background: none;
        position: absolute;
        top: 10px;
        right: 10px;
        border: 1px solid black;
        border-radius: 50%;
      `;
    }

    if (variant === "edit") {
      return css`
        position: absolute;
        top: 5px;
        right: 5px;
      `;
    }

    if (variant === "tabButton") {
      return css`
        gap: 0.4rem;
        transition: 0, 5s ease;
        flex-direction: row;
      `;
    }
  }}
`;

export default StyledButton;
