// EndScreen.jsx

import React from "react";
import { useNavigate } from "react-router-dom";

function EndScreen() {
  const navigate = useNavigate();

  const handleBackToStart = () => {
    navigate("/"); // Navigerar tillbaka till startskärmen
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        height: "100vh",
        justifyContent: "center",
        backgroundColor: "#222",
        color: "white",
      }}
    >
      <h1>Spelet är avslutat</h1>
      <p>Tack för att du spelade!</p>
      <button onClick={handleBackToStart} style={buttonStyle}>
        Tillbaka till Startskärmen
      </button>
    </div>
  );
}

// Styling för knappen
const buttonStyle = {
  marginTop: "20px",
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "4px",
  transition: "background-color 0.3s",
};

// Hover-styling (om du vill lägga till extra styling för hovereffekten)
buttonStyle[":hover"] = {
  backgroundColor: "#45a049",
};

export default EndScreen;
