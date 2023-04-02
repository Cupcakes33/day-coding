import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import App from "./App";
import GlobalStyle from "./style/GlobalStyle";
import { darkTheme } from "./style/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <RecoilRoot>
        <GlobalStyle />
        <App />
      </RecoilRoot>
    </ThemeProvider>
  </React.StrictMode>
);
