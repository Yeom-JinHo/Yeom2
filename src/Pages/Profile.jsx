import React from "react";
import "./Profile.scss";
const Profile = () => {
  const profileData = [
    "모였을때 더 빛나는 협업에 능한",
    `'왜?' 라는 질문을 중요하게 생각하는`,
    "T자형 인재를 지향하는",
  ];
  return (
    <div className="profile-page">
      <header className="profile-header">저는 ___ 개발자 입니다.</header>
      <ul className="profile-ul">
        {profileData.map((item, ind) => (
          <li className="profile-ul__li">
            {ind + 1}. {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
