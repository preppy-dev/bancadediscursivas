import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@font-face {
  font-family: 'Montserrat';
  src: url('./font/Montserrat/Montserrat-Bold.ttf') format('ttf');
  src: url('./font/Montserrat/Montserrat-Regular.ttf') format('ttf');
  src: url('./font/Montserrat/Montserrat-Light.ttf') format('ttf');
/*   font-weight: normal;
  font-style: normal; */
  font-weight: 100 bold;
  font-style: normal;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:'Montserrat',sans-serif;
  scrollbar-color: #454a4d #202324;
  
}
body{
  font-family:'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* font-size: 1.6rem; */
  background-color:#F3F3F3;
  
}
#root {
  height: 100%;
}

.button:hover {
    transform:translateY(-2px);
}

`;
