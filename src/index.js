import React from "react";
import ReactDOM from "react-dom/client";
import "./global.js";
import App from "./App";
import GlobalStyle from "./global.js";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
