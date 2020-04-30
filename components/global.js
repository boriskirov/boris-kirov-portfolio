import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  
  ::selection {
    background-color: #FFCF00;
    color: #07003B;
  }
  
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Inter, sans-serif;
    font-size: 18px;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.75s ease-in-out;
  }
  `;