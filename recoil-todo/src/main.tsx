import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { RecoilRoot } from "recoil";
import GlobalStyle from "./styles/GlobalStyle";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
);
