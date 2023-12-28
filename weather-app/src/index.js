import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CityProvider } from "./context/CityContext";
import { ApiDataProvider } from "./context/ApiDataContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CityProvider>
    <ApiDataProvider>
      <App />
    </ApiDataProvider>
  </CityProvider>
);
