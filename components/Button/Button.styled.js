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
        margin-left: 5px;
        padding: 7px;
        border: 1px solid var(--passive-color);
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
        top: 20px;
        left: 10px;
        border-radius: 50%;

        &:focus {
          outline: 1px solid var(--accent-color);
        }
      `;
    }
    if (variant === "logOut") {
      return css`
        padding: 7px;
        background: none;
        position: absolute;
        top: 20px;
        right: 10px;
        border-radius: 50%;

        &:focus {
          outline: 1px solid var(--accent-color);
        }
      `;
    }
    if (variant === "logIn") {
      return css`
        border: 1px solid var(--passive-color);
        border-radius: 5px;
        background: black;
        color: white;
        margin: 1em auto;
        padding: 5px;
        flex-direction: row;
        padding: 10px;
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
        transform: translatex(10%);
      `;
    }

    if (variant === "profileList") {
      return css`
        flex-direction: row;
        gap: 10px;
        padding: 10px;
        border-radius: 5px;

        &:focus {
          outline: 1px solid var(--accent-color);
        }
      `;
    }
    if (variant === "like") {
      return css`
        padding: 7px;
        border: 1px solid var(--passive-color);
        border-radius: 50%;
        margin: 3px 0;
        background-color: white;
        z-index: 10;

        &:focus {
          outline: 1px solid var(--accent-color);
        }
      `;
    }
    if (variant === "learning") {
      return css`
        padding: 7px;
        border: 1px solid var(--passive-color);
        border-radius: 50%;
        margin: 3px 0;
        background-color: white;
        z-index: 10;

        &:focus {
          outline: 1px solid var(--accent-color);
        }
      `;
    }
    if (variant === "mastered") {
      return css`
        padding: 7px;
        border: 1px solid var(--passive-color);
        border-radius: 50%;
        margin: 3px 0;
        background-color: white;
        z-index: 10;

        &:focus {
          outline: 1px solid var(--accent-color);
        }
      `;
    }
    if (variant === "note") {
      return css`
        margin-top: 5px;
        padding: 2px;
        border: 1px solid var(--passive-color);
        border-radius: 5px;

        &:focus {
          outline: 1px solid var(--accent-color);
        }
      `;
    }
    if (variant === "description") {
      return css`
        position: absolute;
        top: 0;
        left: 5em;
      `;
    }
  }}
`;

export default StyledButton;
