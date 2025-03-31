import React from "react";
import "./Row.css";

const Row = ({ guess, targetWord }) => {
  const getLetterStatus = function (letter, index) {
    if (letter === targetWord[index]) {
      return "correct";
    } else if (targetWord.includes(letter)) {
      return "present";
    } else {
      return "absent";
    }
  };

  const guessSplit = guess.split("");

  return (
    <div className="word-row">
      {guessSplit.map((letter, index) => (
        <span
          className={`letter ${getLetterStatus(letter, index)}`}
          key={index}
        >
          {letter}
        </span>
      ))}
    </div>
  );
};

export default Row;
