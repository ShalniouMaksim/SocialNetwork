import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0%;
  min-height: 100vh; 
  overflow-x: hidden;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
p{
  margin: 0%;
    color: black;
    font-size: 100%;
    @media (max-width: 3840px) {
      margin: 0%;

  }
  @media (max-width: 3000px) {
    margin-top: 0%;

  }
  @media (max-width: 2300px) {
    margin-top: 4%;
  }
  @media (max-width: 1300px) {
    margin-top: 4%;
  }
  @media (max-width: 1000px) {
    margin-top: 6%;
  }
  @media (max-width: 550px) {
    margin-top: 8%;
  }
}
  `;
export default GlobalStyle;
