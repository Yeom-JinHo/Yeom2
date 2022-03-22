import React from "react";
import "./Profile.scss";
const Profile = () => {
  return (
    <div className="profile">
      {/* <img src={cloudImg} alt="구름이미지" className="profile__cloud-img" /> */}
      <div className="profile__cloud-img"></div>
      <header className="profile-header">저는 ___ 개발자 입니다.</header>
      <ul className="profile-ul">
        <li className="profile-ul__li">멋진</li>
        <li className="profile-ul__li">잘생긴</li>
        <li className="profile-ul__li">귀여운</li>
        <li className="profile-ul__li">프론트</li>
      </ul>
    </div>
  );
};

export default Profile;
