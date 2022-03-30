import "./App.scss";
import "../src/assets/styles/reset.css";
import "../src/assets/styles/font.css";
import "../src/assets/styles/_variables.scss";
import Canvas from "./Pages/Canvas.jsx";
import Profile from "./Pages/Profile";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import SideScroll from "./components/common/SideScroll";
import bottomImg from "../src/assets/img/bottom.png";
function App() {
  return (
    <div className="App">
      <Canvas />
      <SideScroll />
      <Profile />
      <Skills />
      <Projects />
      <div className="empty"></div>
      <img className="bottomImg" src={bottomImg} alt="" />
    </div>
  );
}

export default App;
