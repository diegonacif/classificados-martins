import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
      font-family: "Red Hat Display", sans-serif;
      font-optical-sizing: auto;

      -webkit-tap-highlight-color: ${({ theme }) => theme['chale-rosa']};

      a {
        text-decoration: none;
        color: inherit;
        &:focus-visible, &:focus-within, &:focus, &:active, &:target {
          border: 0;
          outline: 0;
          background-color: transparent;
        }
      }
    }

  body {
    background-color: ${({ theme }) => theme['gray-950']};
    color: ${({ theme }) => theme['gray-100']};
  }
`