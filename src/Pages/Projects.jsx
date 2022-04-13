import React from "react";
import "./Projects.scss";
import { useEffect } from "react";
import AOS from "aos";
const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="projects-page">
      <div
        className="projects-page-container"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        여기에 프로젝트
      </div>
    </div>
  );
};

export default Projects;
