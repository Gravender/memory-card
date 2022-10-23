import React from "react";
const ScoreBoard = (props) => {
  const { score, bestScore } = props;
  return (
    <div className="scoreBoard">
      <div className="Title">
        <h1>Memory Game</h1>
      </div>
      <div className="scores">
        <p>Best Score: {bestScore}</p>
        <p>Score: {score}</p>
      </div>
    </div>
  );
};
export default ScoreBoard;
