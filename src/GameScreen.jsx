// GameScreen.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // För navigation till EndScreenimport PauseOverlay from "./PauseOverlay"; // Importera overlay-komponenten
import PauseOverlay from "./PauseOverlay"; // Importera overlay-komponenten

function GameScreen() {
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

  const handleEndGame = () => {
    navigate("/end"); // Navigerar till EndScreen
  };

  return (
    <div style={backgroundStyle}>
      <button style={pauseButtonStyle} onClick={() => setIsPaused(true)}>
        ⏸
      </button>
      {isPaused && (
        <PauseOverlay
          onClose={() => setIsPaused(false)}
          onEndGame={handleEndGame}
        />
      )}
      <h1>Game Screen</h1>
      {/* Lägg till spelkomponenter och innehåll här */}
    </div>
  );
}

// Definiera stilen för bakgrundsbilden
const backgroundStyle = {
  backgroundImage: `url(${"src/assets/GameScreen.PNG"})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
  width: "100vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
};

//stylea pausknappen
const pauseButtonStyle = {
  position: "absolute",
  top: "30px",
  right: "30px",
  background: "transparent",
  border: "none",
  fontSize: "50px",
  cursor: "pointer",
  color: "white",
};

export default GameScreen;
