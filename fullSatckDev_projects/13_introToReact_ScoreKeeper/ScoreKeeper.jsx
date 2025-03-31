import React, { useState } from "react";
import ScoreView from "./ScoreView";
import "./ScoreKeeper.css";

const ScoreKeeper = () => {
  const [teamOneScore, setTeamOneScore] = useState(0);
  const [teamTwoScore, setTeamTwoScore] = useState(0);

  const handleTeamOneScore = () => {
    setTeamOneScore(teamOneScore + 1);
  };

  const handleTeamTwoScore = () => {
    setTeamTwoScore(teamTwoScore + 1);
  };

  let teamOneLeading = false;
  let teamTwoLeading = false;
  if (teamOneScore > teamTwoScore) {
    teamOneLeading = true;
  } else if (teamOneScore < teamTwoScore) {
    teamTwoLeading = true;
  }

  return (
    <div className="score-keeper-container">
      <h1 className="score-keeper-heading">Score Keeper</h1>
      <ScoreView
        teamName="Team One"
        score={teamOneScore}
        leading={teamOneLeading}
      />
      <button onClick={handleTeamOneScore} className="score-keeper-button">
        +1 Team One
      </button>
      <ScoreView
        teamName="Team Two"
        score={teamTwoScore}
        leading={teamTwoLeading}
      />
      <button onClick={handleTeamTwoScore} className="score-keeper-button">
        +1 Team Two
      </button>
    </div>
  );
};

export default ScoreKeeper;
