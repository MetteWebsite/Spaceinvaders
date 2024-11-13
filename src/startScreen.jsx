import React from "react";

// Define your component
function StartScreen() {
  return (
    <div style={backgroundStyle}>
      <h1>Welcome to the Start Screen</h1>
      <p>This is where you can start your journey!</p>
      {/* Add other content here as needed */}
    </div>
  );
}

// Sennare som sista grej så kan vi flytta så att css ffår en egen fil.
// Define the style for the background
const backgroundStyle = {
  backgroundImage: `url(${"src/assets/startScreen.PNG"})`,
  backgroundSize: "cover", // This makes the image cover the entire area
  backgroundPosition: "center", // Centers the image
  height: "100vh", // Sets the height to full viewport height
  width: "100vw", // Sets the width to full viewport width
  display: "flex", // Optional: Flex display to center your content
  alignItems: "center", // Optional: Center content vertically
  justifyContent: "center", // Optional: Center content horizontally
  color: "white", // Optional: Text color for contrast
};

export default StartScreen;
