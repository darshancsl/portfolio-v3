import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none
  }

  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    font-family: -apple-system, BlinkMacSystemFont Helvetica, Arial, sans-serif;
    line-height: 1.5;
  }

  .container {
    padding: 0 15px;
    max-width: 1290px;
    margin: 0 auto;
    width: 100%;
  }
`;

export default GlobalStyles;
