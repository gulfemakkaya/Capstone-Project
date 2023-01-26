import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }  
  
  main {
    position: relative;
    top: 5rem;
    margin: 0 auto;
    max-width: 450px;
    padding: 1px 1px;
  }

`;
