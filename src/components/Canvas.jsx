import React, { useEffect, useRef, useState } from "react";
import nameImg from "../img/name.png";
import "./Canvas.scss";

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const clientW = document.body.clientWidth;
    const clientH = document.body.clientHeight;
    console.log(clientW, clientH);
    canvas.width = clientW;
    canvas.height = clientH;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = nameImg;
    img.onload = () => {
      //drawImage(이미지객체, 사각형 왼위 x, 사각형 왼위 y, 가로크기, 세로크기)
      ctx.drawImage(img, 0, 0, clientW, clientH);
      const imgData = ctx.getImageData(0, 0, clientW, clientH);
      const dots = getDotPos(imgData, clientW, clientH);
      ctx.clearRect(0, 0, clientW, clientH);
      dots.map((dot) => {
        ctx.beginPath();
        ctx.fillStyle = "#ffff00";
        ctx.arc(dot.x, dot.y, 1, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
      });
    };
  }, []);

  const getDotPos = (imageData, W, H) => {
    const particles = [];
    for (let h = 0; h < H; h += 4) {
      for (let w = 0; w < W; w += 4) {
        const idx = (h * W + w) * 4;
        const r = imageData.data[idx];
        const g = imageData.data[idx + 1];
        const b = imageData.data[idx + 2];
        if (r !== 255) {
          const color = `#${decToHex(r)}${decToHex(g)}${decToHex(b)}`;
          particles.push({
            x: w,
            y: h,
            color,
          });
        }
      }
    }

    return particles;
  };

  const decToHex = (dec) => {
    const hex = dec.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  };
  return <canvas ref={canvasRef} className="canvas"></canvas>;
};

export default Canvas;