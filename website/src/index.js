import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/CSS/Index.css"
import "@fontsource/poppins"; // Importing Poppins font

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
