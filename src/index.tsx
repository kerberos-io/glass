import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./app.variables.css"; // This is taken from https://github.com/kerberos-io/ui/blob/main/.storybook/app.variables.css
import "./index.scss"; // This is taken from node_modules/@kerberos-io/ui/lib/index.css and replaced suffix with .scss

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
