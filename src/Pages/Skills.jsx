import React from "react";
import SkillCard from "../components/common/SkillCard";
import "./Skills.scss";
import jsIcon from "../assets/img/js-icon.svg";
import reactIcon from "../assets/img/react-icon.svg";
import sassIcon from "../assets/img/sass-icon.svg";
import githubIcon from "../assets/img/github-icon.svg";
import raspberrypiIcon from "../assets/img/raspberrypi-icon.svg";
import reduxIcon from "../assets/img/redux-icon.svg";
import restapiIcon from "../assets/img/restapi-icon.svg";
import tsIcon from "../assets/img/ts-icon.svg";

const Skills = () => {
  const skilled = [
    { name: "react", src: reactIcon },
    { name: "javascript", src: jsIcon },
    { name: "sass", src: sassIcon },
    { name: "github", src: githubIcon },
    { name: "restapi", src: restapiIcon },
  ];
  const experienced = [
    { name: "raspberrypi", src: raspberrypiIcon },
    { name: "redux", src: reduxIcon },
    { name: "typescript", src: tsIcon },
  ];
  return (
    <div className="skills-page">
      <div className="skills">
        <p className="skills-title">능숙한</p>
        <ul className="skills-ul">
          {skilled.map((item) => (
            <SkillCard name={item.name} imgSrc={item.src}></SkillCard>
          ))}
        </ul>
      </div>
      <div className="skills">
        <p className="skills-title">경험해본</p>
        <ul className="skills-ul">
          {experienced.map((item) => (
            <SkillCard name={item.name} imgSrc={item.src}></SkillCard>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
