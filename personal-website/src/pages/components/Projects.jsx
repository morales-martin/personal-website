import React from "react";
import Project from "./Project";
import styles from "./Projects.module.css";

function Projects({ className }) {
  const projects = [
    {
      title: "Chord Search",
      roles: ["Full Stack Engineer", "UI Designer"],
      description:
        "Search platform for guitar players, which displays a grid of diagrams for accurate chord finger placement. - All diagrams (including interactive) are drawn using the HTML Canvas feature",
      desktop: "/chordsearch_desktop.png",
      mobile: "/chordsearch_mobile.png",
    },
    {
      title: "Chord Search",
      roles: ["Full Stack Engineer", "UI Designer"],
      description:
        "Search platform for guitar players, which displays a grid of diagrams for accurate chord finger placement. - All diagrams (including interactive) are drawn using the HTML Canvas feature",
      desktop: "/chordsearch_desktop.png",
      mobile: "/chordsearch_mobile.png",
    },
  ];

  return (
    <div className={`${className} ${styles.projectsContainer}`}>
      {projects.map((project) => (
        <Project
          key={project.title}
          projectTitle={project.title}
          roles={project.roles}
          description={project.description}
          desktopImgUrl={project.desktop}
          mobileImgUrl={project.mobile}
        />
      ))}
    </div>
  );
}

export default Projects;
