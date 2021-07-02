import { createGlobalStyle } from 'styled-components';
import background from '../assets/background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    display: flex;
    background: #f0f0f5 url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    flex-wrap: wrap;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, p {
    font: 1.6rem 'Varela Round', sans-serif;
  }

  #root {
    width: 100vw;
  }
`;
