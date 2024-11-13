import React from "react";

// Define your component
function StartScreen() {
  return (
    <div style={backgroundStyle}>
      <div style={textContainerStyle}>
        <h1 style={titleStyle}>Course Slayer</h1>
        <h2 style={subtitleStyle}>stay sharp, slay smart</h2>

        {/* Add other content here as needed */}
      </div>
    </div>
  );
}

// Sennare som sista grej så kan vi flytta så att css ffår en egen fil.
// Denna stylar endast bakgrundbilden
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

// Denna styling omringar all text på första skärmen
const textContainerStyle = {
  //backgroundColor: "rgba(0, 0, 0, 0.5)", // denna kan man använda sig av för att veta vart textcontainer området är
  padding: "20px",
  borderRadius: "8px",
  textAlign: "center",
};

const titleStyle = {
  color: "blue",
  fontFamily: "Impact", //leta efter bättre font
  //fontStyle: "bold",
  textTransform: "uppercase", // Optional: Transforms text to uppercase
  fontSize: "90px", // Sets the font size
};

const subtitleStyle = {
  color: "black",
  fontFamily: "Courier New",
  fontSize: "40px", // Sets the font size
};

export default StartScreen;
