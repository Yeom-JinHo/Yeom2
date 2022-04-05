import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "../src/assets/styles/reset.css";
import "../src/assets/styles/font.css";
import "../src/assets/styles/_variables.scss";
import "../src/assets/styles/_utils.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
