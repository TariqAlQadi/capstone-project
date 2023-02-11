import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
  }

  :root {
    --text-color-light:;
    --text-color-dark:;

    --primary-color:;
    --secondary-color:;
    --accent-color: darkred;

    --primary-bg-color: darkred;
    --secondary-bg-color:;
  }

  body {
    font-family: monospace;

  }
`;

export default GlobalStyle;
