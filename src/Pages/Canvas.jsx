import React, { useEffect, useRef } from "react";
import "./Canvas.scss";
import App from "../js/app.js";

const Canvas = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    new App(canvasRef.current);
  }, []);

  return (
    <div className="canvas-page">
      <canvas ref={canvasRef} className="canvas"></canvas>;
    </div>
  );
};

export default Canvas;
