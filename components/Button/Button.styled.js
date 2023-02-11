import css from "styled-jsx/css";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  transition: 0.5s;
  padding: 0;
  background: none;
  display: flex;
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
    // if (variant === "tabBarButton") {
    //   return css`
    //     z-index: 10;
    //     gap: 0.4rem;
    //     color: var(--white);
    //     transition: 0, 5s ease;
    //     mix-blend-mode: difference;
    //   `;
    // }
  }}
`;

export default StyledButton;
