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

// Denna sköter stylingen för hela overlayn alltså hela denna sidan
const overlayStyle = {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100vw", //vw är egentligen bättre att använda en px, som mått
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.8)", // Transparent svart bakgrund
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  zIndex: "1000", // Högre z-index för att säkerställa att overlayen syns över andra element
};

// Denna stylear instruktionstexten (alltihop just nu), dela in i fler div"ar för att desiggna bättre
const contentStyle = {
  //backgroundColor: "rgba(0, 0, 0, 0.9)", // Mörk bakgrund för textområdet
  padding: "20px",
  borderRadius: "8px",
  maxWidth: "600px",
  textAlign: "center",
  color: "white", // Vit text för bättre kontrast
};

// Denna stylar stängningsknappen
const closeButtonStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  background: "transparent",
  border: "none",
  fontSize: "60px",
  color: "red",
  cursor: "pointer",
};

export default InstructionsOverlay;
