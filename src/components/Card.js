import React from "react";
const Card = (props) => {
  const { id, imgSrc, title, onClick } = props;
  return (
    <div onClick={onClick} key={id} className="Card">
      <img className="cardImg" src={imgSrc} alt="" />
      <h2 className="cardTitle">{title}</h2>
    </div>
  );
};
export default Card;
