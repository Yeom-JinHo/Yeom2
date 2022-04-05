import React from "react";
import SkillCard from "../components/common/SkillCard";
import "./Skills.scss";
import jsImg from "../assets/img/js-icon.svg";
import reactImg from "../assets/img/react-icon.svg";
import sassImg from "../assets/img/sass-icon.svg";
// import mysqlImg from "../assets/img/mysql-icon.svg";

const Skills = () => {
  const goodSkills = [
    { name: "react", src: reactImg },
    { name: "javascript", src: jsImg },
    { name: "sass", src: sassImg },
  ];
  return (
    <div className="skills-page">
      <div className="skills">
        <p className="skills-title">능숙한</p>
        <ul className="skills-ul">
          {goodSkills.map((item) => (
            <SkillCard name={item.name} imgSrc={item.src}></SkillCard>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
