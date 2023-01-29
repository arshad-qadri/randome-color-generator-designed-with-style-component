import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import GlobalStyle from "./styledComponent/GlobalStyle";
import Wrapper from "./styledComponent/Wrapper";




const theme = {
  bg: "#000",
  textColor: "#fff",
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyle />
        <App />
      </Wrapper>
    </ThemeProvider>
  </React.StrictMode>
);
