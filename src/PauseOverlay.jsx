import React from "react";

function PauseOverlay({ onClose, onEndGame }) {
  return (
    <div style={overlayStyle}>
      <div style={contentStyle}>
        <h2>Paus</h2>
        <button style={buttonStyle} onClick={onClose}>
          Fortsätt Spel
        </button>
        <button style={buttonStyle} onClick={onEndGame}>
          Avbryt Spel
        </button>
      </div>
    </div>
  );
}

// Stylinngen för hela overlayenn
const overlayStyle = {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  zIndex: "1000",
};

// stylinggen för innehållet i overlayen
const contentStyle = {
  backgroundColor: "#333",
  padding: "20px",
  borderRadius: "8px",
  maxWidth: "400px",
  textAlign: "center",
};

// stylingen för knapparna i overlayen
const buttonStyle = {
  margin: "10px",
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "4px",
};

export default PauseOverlay;
