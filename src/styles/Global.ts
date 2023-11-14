"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  :root {
    --white: #FFFFFF;
    --black: #000000;
    --background-footer: #EEEEEE;
    --blue: #0F52BA;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #e5e5e5;;
    -webkit-font-smoothing: antialiased;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-family: 'Montserrat', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
