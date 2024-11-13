import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Importera huvudkomponenten

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Denna filen main.jsx behöver vi ej röra då denna bara hjälper till att koppla till html filen
