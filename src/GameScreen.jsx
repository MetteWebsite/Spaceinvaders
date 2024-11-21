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
      {/* Lägg till spelkomponenter och innehåll här */}
      {/*Player element*/ }
        <img
        src={"src/assets/player.png"}
        alt="Player"
        style={playerStyle}
        />
      {/*Böcker elements*/ }
      <img
       src={"src/assets/Books.png"} // Path to Books image
       alt="Books"
       style={booksStyle}
      />
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
  position:"relative",//allows aboslute positioning of child elements som t.ex player element
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

//stylea spelarens bild
const playerStyle={
  position:"absolute",//tillåter justering av spelarens vertikala position mha bottom.
  bottom:"-50px",//spelarens vertikala position.
  width:"45%",//spelarens storlek. 
  height:"auto",
};

//stylea böckernas bild
const booksStyle={
  position:"absolute",//tillåter justering av böckernas vertikala position mha bottom.
  bottom:"240px",//Vertikal position.
  width:"90%",//bildens storlek. 
  height:"auto",
};
export default GameScreen;
