import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProperty } from "./context/ThemeContext";

ReactDOM.render(
  <ThemeProperty>
    <App />
  </ThemeProperty>,

  document.getElementById("root")
);
