import "./App.scss";
import Canvas from "./Pages/Canvas.jsx";
import Profile from "./Pages/Profile";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import SideScroll from "./components/common/SideScroll";
import bottomImg from "../src/assets/img/bottom.png";
import starImg from "../src/assets/img/star.png";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  const starBgRef = useRef();
  AOS.init();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      var scroll = window.scrollY;
      starBgRef.current.style.transform = "translateY(" + -scroll / 3 + "px)";
    });
  });
  return (
    <div className="App">
      <Canvas />
      <SideScroll />
      <Profile />
      <Skills data-aos="fade-up" data-aos-duration="2000" />
      <Projects />

      <img className="starBg" src={starImg} alt="" ref={starBgRef} />
      <img className="bottomImg" src={bottomImg} alt="" />
    </div>
  );
}

export default App;
