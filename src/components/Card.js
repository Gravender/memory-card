import React from "react";
const Card = (props) => {
  const { imgSrc, title } = props;
  return (
    <div className="Card">
      <img className="cardImg" src={imgSrc} alt="" />
      <h2 className="cardTitle">{title}</h2>
    </div>
  );
};
export default Card;
