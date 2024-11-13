import React from "react";

const StartScreen = ({ onStart }) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Space Invaders</h1>
      <p style={styles.description}>Tryck på start för att rädda universum!</p>
      <button style={styles.startButton} onClick={onStart}>
        Starta spelet
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#000", // Svart bakgrund för rymdtema
    color: "#fff", // Vit textfärg
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "3rem",
    margin: "0 0 20px",
  },
  description: {
    fontSize: "1.2rem",
    marginBottom: "40px",
  },
  startButton: {
    padding: "10px 20px",
    fontSize: "1rem",
    cursor: "pointer",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#4CAF50", // Grön knapp för att synas väl
    color: "#fff",
  },
};

export default StartScreen;
