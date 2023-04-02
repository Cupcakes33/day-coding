import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-weight: 300;
    color: black;
    line-height: 1.2;
    background: linear-gradient(135deg, #e09, #d0e);
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
