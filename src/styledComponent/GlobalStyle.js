import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${({ theme, colors }) => (colors ? colors : theme.bg)};

}
.btn{
    padding: 10px 20px;
    font-size: .8em;
    cursor: pointer;
    text-transform: capitalize;
    box-shadow: 0 0 5px rgba(0,0,0,0.5);
}
h1,h3{
  font-size: 1em;
  cursor: pointer;
  text-align: center;
  margin-bottom: 20px;
  &:hover{
    color: rgb(228, 220, 220);
  }
}
@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}

`;

export default GlobalStyle;
