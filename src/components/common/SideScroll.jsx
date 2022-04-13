import React, { useEffect, useMemo, useRef, useState } from "react";
import "./SideScroll.scss";
import rocketImg from "../../assets/img/rocket.svg";

const SideScroll = () => {
  const rocket = useRef(null);
  const lists = ["메인", "프로필", "스킬", "프로젝트"];
  const [nowPage, setNowPage] = useState("메인");

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      const scrollTop = document.documentElement.scrollTop;
      let per = Math.ceil(
        (scrollTop /
          ((document.body.scrollHeight / 3) * 4 - window.innerHeight)) *
          100
      );
      if (per > 75) {
        setNowPage("프로젝트");
      } else if (per > 50) {
        setNowPage("스킬");
      } else if (per > 25) {
        setNowPage("프로필");
      } else {
        setNowPage("메인");
      }
      rocket.current.style.top = per * 0.2 - 2 + "vh"; // 0.2 = progress(20vh) 1= rocketHeight/2;
    });
    // fix (키보드로 스크롤도 할 수 있음)
    window.addEventListener("mousewheel", (e) => {
      if (e.deltaY > 0) {
        rocket.current.style.transform = "scaleY(-1)";
      } else {
        rocket.current.style.transform = "scaleY(1)";
      }
    });
  }, []);

  const handleSlider = (e) => {
    let target;
    switch (e.target.innerText) {
      case "메인":
        target = document.querySelector(".canvas-page");
        break;
      case "프로필":
        target = document.querySelector(".profile-page");
        break;
      case "스킬":
        target = document.querySelector(".skills-page");
        break;
      case "프로젝트":
        target = document.querySelector(".projects-page");
        break;
      default:
        target = document.querySelector(".canvas-page");
        break;
    }
    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth",
    });
  };

  const setPageClassName = (value) => {
    const prefix = `sideScroll-ul__btn`;
    if (value === nowPage) {
      return prefix + " btn--active";
    } else {
      return prefix;
    }
  };
  return (
    <div className="sideScroll">
      <img
        className="sideScroll__rocket-img"
        src={rocketImg}
        alt="로켓이미지"
        ref={rocket}
      />
      <ul className="sideScroll-ul">
        {lists.map((item, ind) => (
          <li key={ind} className="sideScroll-ul__li">
            <button className={setPageClassName(item)} onClick={handleSlider}>
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideScroll;
