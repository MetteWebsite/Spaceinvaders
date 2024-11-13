import React, { useState } from "react";
import StartScreen from "./startScreen";

// Denna kommer vi inte behöva ändra så mycket
const App = () => {
  const [currentScreen, setCurrentScreen] = useState("start"); // Kontrollera vilken skärm som visas

  const startGame = () => {
    setCurrentScreen("game");
  };

  const goToStartScreen = () => {
    setCurrentScreen("start");
  };

  return (
    <div className="App">
      {currentScreen === "start" && <StartScreen onStart={startGame} />}
      {currentScreen === "game" && <Game onBack={goToStartScreen} />}
    </div>
  );
};

export default App;
