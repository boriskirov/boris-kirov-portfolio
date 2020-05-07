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
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.75s ease-in-out;
    line-height: 1.5;
    max-width: 1440px;
  }

  header, footer {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1vw 16vw;
    margin-bottom: 1.5vw;
    margin-top: 1vw;
  }

  section {
    width: 100%;
    margin-bottom: 16px;
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

  h4 {
    margin: 4px 0;
  }
  
  small {
    display: flex;
    align-items: center;
  }

  p {
    font-size: 16px;
    line-height: 1.4;
    margin: 16px 0 24px 0;
  }

  ul {
    padding-left: 12px;
    list-style: square;
    margin: 8px 0px 0px 4px;
  }

  li {
    margin-bottom: 8px;
  }

  ul a {
    font-weight: 600;
  }

  li a {
    margin-left: 4px;
  }

  img {
    width: 100%;  
  }

  blockquote {
    margin: 8px 0;
    padding: 16px;
    background-color: #5454540f;
    border-left: 2px solid;
    font-style: italic;
    font-size: 16px;
  }

  @media (max-width: 600px) {
    footer {
          padding: 10vw 2.5vw;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
    }

    header {
      padding: 10vw 2.5vw;
    }
  }

  `;