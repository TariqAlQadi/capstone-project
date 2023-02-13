import { createGlobalStyle } from "styled-components";

//import fonts
import { Roboto } from "@next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

import { Lobster } from "@next/font/google";
const lobster = Lobster({
  subsets: ["latin"],
  weight: ["400"],
});

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {

    --roboto-font: ${roboto.style.fontFamily};
    --lobster-font: ${lobster.style.fontFamily};

    --text-color-light:;
    --text-color-dark:;

    --primary-color:;
    --secondary-color:;

    --passive-color: lightgrey;
    --accent-color: darkred;

    --primary-bg-color: darkred;
    --secondary-bg-color:;
  }

  body {
    font-family: var(--roboto-font);
    font-weight: 300;
  }
`;

export default GlobalStyle;
