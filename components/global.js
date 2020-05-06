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
    line-height: 1.5;
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

  p {
    font-size: 14px;
    line-height: 1.4;
    margin: 8px 0 16px 0;
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

  img {
    width: 100%;  
  }

  `;