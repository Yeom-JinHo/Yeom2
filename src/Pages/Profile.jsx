import React from "react";
import "./Profile.scss";
const Profile = () => {
  return (
    <div className="profile-page">
      {/* <img src={cloudImg} alt="구름이미지" className="profile__cloud-img" /> */}
      <div className="profile__cloud-img"></div>
      <header className="profile-header">저는 ___ 개발자 입니다.</header>
      <ul className="profile-ul">
        <li className="profile-ul__li">1</li>
        <li className="profile-ul__li">2</li>
        <li className="profile-ul__li">3</li>
        <li className="profile-ul__li">4</li>
      </ul>
    </div>
  );
};

export default Profile;
