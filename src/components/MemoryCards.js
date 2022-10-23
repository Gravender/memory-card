import React, { useState } from "react";
import ScoreBoard from "./ScoreBoard";
import Card from "./Card";
const MemoryCards = (props) => {
  const { cards } = props;
  const [hitCards, setHitCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [win, setWin] = useState(false);
  const reset = () => {
    setHitCards([]);
    setScore(0);
    setBestScore(0);
  };
  const updateScores = (newScore) => {
    setScore(newScore);
    if (newScore > bestScore) {
      setBestScore(newScore);
    }
    if (newScore === cards.length) {
      reset();
      setWin(true);
    }
  };
  const onClick = (id) => {
    if (hitCards.includes(id)) {
      setHitCards([]);
      updateScores(0);
    } else {
      setHitCards(hitCards.concat(id));
      updateScores(score + 1);
    }
  };
  const showWin = () => {
    if (win) {
      return (
        <div
          style={{
            position: "absolute",
            textAlign: "center",
            zIndex: "3",
            fontSize: "25px",
            left: "50%",
            top: "250px",
            transform: "translate(-50%, -50%)",
            width: "300px",
            height: "200px",
            backgroundColor: "rgba(154, 154, 167, 0.95)",
            borderRadius: "5%",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.4)",
          }}
        >
          <h1>You won!</h1>
          <button
            style={{
              fontSize: "20px",
              height: "35px",
              width: "110px",
              backgroundColor: "rgba(154, 154, 167, 0.33)",
              borderRadius: "10px",
              border: "solid 2px black",
            }}
            onClick={() => setWin(false)}
          >
            Close
          </button>
        </div>
      );
    }
    return null;
  };
  return (
    <div>
      <ScoreBoard score={score} bestScore={bestScore} />
      <div className="memoryCards">
        {cards
          .map((card) => ({ card, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ card }) => {
            return (
              <Card
                onClick={() => onClick(card.id)}
                key={card.id}
                imgSrc={card.imgSrc}
                title={card.title}
              />
            );
          })}
      </div>
      {showWin()}
    </div>
  );
};
export default MemoryCards;
