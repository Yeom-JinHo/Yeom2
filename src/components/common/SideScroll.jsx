import React, { useEffect, useRef } from "react";
import "./SideScroll.scss";
import rocketImg from "../../img/rocket.svg";

const SideScroll = () => {
  const progressBar = useRef(null);
  const rocket = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      const scrollTop = document.documentElement.scrollTop;
      let per = Math.ceil(
        (scrollTop /
          ((document.body.scrollHeight / 3) * 4 - window.innerHeight)) *
          100
      );
      // progressBar.current.style.height = per + "%";
      rocket.current.style.top = per * 0.2 - 3.13 + "vh"; // 0.2 = progress(20vh) bar 3.13= rocketHeight/2;
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

  return (
    <div className="sideScroll">
      <img
        className="sideScroll__rocket-img"
        src={rocketImg}
        alt="로켓이미지"
        ref={rocket}
      />
      <div className="sideScroll__progress" ref={progressBar}></div>
    </div>
  );
};

export default SideScroll;
