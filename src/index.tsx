// React
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Components
import GlobalStyle from "./components/global";

// React Router Dom
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
