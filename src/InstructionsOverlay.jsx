import React from "react";

function InstructionsOverlay({ onClose }) {
  return (
    <div style={overlayStyle}>
      <div style={contentStyle}>
        <button style={closeButtonStyle} onClick={onClose}>
          ✖
        </button>
        <h2>Game Instructions</h2>
        <p>Here are the instructions for the game...</p>
        <ul>
          <li>Rule 1: ...</li>
          <li>Rule 2: ...</li>
          <li>Rule 3: ...</li>
        </ul>
      </div>
    </div>
  );
}

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

const contentStyle = {
  backgroundColor: "#333",
  padding: "20px",
  borderRadius: "8px",
  maxWidth: "600px",
  textAlign: "center",
};

const closeButtonStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  background: "transparent",
  border: "none",
  fontSize: "24px",
  color: "white",
  cursor: "pointer",
};

export default InstructionsOverlay;
