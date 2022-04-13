import React from "react";
import "./Profile.scss";
import { useEffect } from "react";
import AOS from "aos";
import TypeIt from "typeit-react";
const Profile = () => {
  const profileData = [
    "모였을때 더 빛나는 협업에 능한",
    `'왜?' 라는 질문을 중요하게 생각하는`,
    "T자형 인재를 지향하는",
  ];
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="profile-page">
      <div
        className="profile-page-container"
        data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-mirror="true"
      >
        <header className="profile-header">저는 ___ 개발자 입니다.</header>
        <ul className="profile-ul">
          {profileData.map((item, ind) => (
            <li className="profile-ul__li">
              <TypeIt
                getBeforeInit={(instance) => {
                  instance
                    .pause(2000 * ind)
                    .type(`${ind + 1}. ${item}`)
                    .pause(500);
                  // Remember to return it!
                  return instance;
                }}
                options={{ cursor: false }}
              ></TypeIt>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
