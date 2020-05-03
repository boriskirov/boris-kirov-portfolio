import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  
  ::selection {
    background-color: ${({ theme }) => theme.selection};
    color: ${({ theme }) => theme.selectionText};
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

  a {
    color: inherit;
    cursor: ne-resize;
    transition: background-color .3s ease;
    text-decoration: underline;
  }

  a:hover,
  a:focus {
    text-decoration: none;
    color: #3f53d9;
  }

  a:active {
    background-color: #FFCF00;
    color: #3f53d9;
  }
  
  small {
    display: flex;
  }

  ul {
    padding-left: 12px;
    list-style: square;
  }

  li {
    margin-bottom: 8px;
  }

  ul a {
    font-weight: 600;
  }
  
  `;