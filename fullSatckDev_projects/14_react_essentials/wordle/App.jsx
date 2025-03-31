import React, { useState } from "react";
import "./App.css";
import Row from "./Row.jsx";

const App = () => {
  const targetWord = "REACT";
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");

  const handleInputChange = (event) => {
    setCurrentGuess(event.target.value.toUpperCase());
  };

  const [attempts, setAttempts] = useState(1);
  const maxAttempts = 6;
  const handleGuess = () => {
    if (currentGuess.length === 5) {
      const updatedGuesses = [...guesses, currentGuess];
      setGuesses(updatedGuesses);
      setCurrentGuess(""); // clear the input field after a guess
      setAttempts((attempts) => attempts + 1);
    }
    if (currentGuess == targetWord || attempts === maxAttempts) {
      setIsGameOver(true);
    }
  };

  const [isGameOver, setIsGameOver] = useState(false);

  return (
    <div className="main-container">
      <h1>Wordle</h1>
      {guesses.map((guess, index) => (
        <div key={index}>
          {" "}
          <Row guess={guess} targetWord={targetWord} />{" "}
        </div>
      ))}
      {!isGameOver && (
        <div>
          <input
            placeholder="Enter your guess"
            onChange={handleInputChange}
            value={currentGuess}
            maxLength={targetWord.length}
          />
          <button onClick={handleGuess}>Guess</button>
        </div>
      )}
      {isGameOver && currentGuess !== targetWord && <p>Game Over! The solution is {targetWord}</p>}
    </div>
  );
};

export default App;
