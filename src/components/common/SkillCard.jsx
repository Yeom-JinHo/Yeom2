import React from "react";
import "./SkillCard.scss";

const SkillCard = ({ name, imgSrc }) => {
  return (
    <div className="skill-card">
      <div className="front card">
        <img src={imgSrc} alt={name} />
      </div>
      <div className="back card">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default SkillCard;
