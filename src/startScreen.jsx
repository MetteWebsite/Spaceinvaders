import React from "react";

const StartScreen = ({ onStart }) => {
  return (
    <div
      style={{
        ...styles.container,
        backgroundImage: `url(${"./assets/startScreen.PNG"})`, // Använd variabeln för bilden
      }}
    >
      <h1 style={styles.title}>Space Invaders</h1>
      <p style={styles.description}>Tryck på start för att rädda universum!</p>
      <button style={styles.startButton} onClick={onStart}>
        Starta spelet
      </button>
    </div>
  );
};

const styles = {};

export default StartScreen;
