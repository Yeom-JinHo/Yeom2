import "./App.scss";
import "./reset.css";
import Canvas from "./components/Canvas.jsx";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Canvas />
      <Profile />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
