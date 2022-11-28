import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import WillContextProvider from "./context/WillContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WillContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </WillContextProvider>
  </React.StrictMode>
);
