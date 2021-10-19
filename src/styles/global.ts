import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Roboto Condensed', sans-serif;
    src: local(Roboto), url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap');
  }
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
