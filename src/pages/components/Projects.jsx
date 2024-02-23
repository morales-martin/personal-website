import React, { useState } from "react";
import Project from "./Project";
import styles from "./Projects.module.css";

function Projects({ className }) {
  const [projects, setProjects] = useState([
    {
      title: "To Do - Advanced Task Manager",
      roles: ["Full Stack Engineer", "UI Designer"],
      description:
        "A 'Todo' web platform that provides users with a task management interface that allows for the creation, update, and deletion of tasks. Additional functions in this project include: task flags / category 'chips', task status filtering, user authentication, user-authenticated saved tasks, and real-time updates.",
      desktop: "/todo_desktop.png",
      mobile: "/todo_mobile.png",
      chips: [
        "Next.js",
        "AWS AppSync",
        "AWS Amplify",
        "AWS DynamoDB",
        "GraphQL API",
        "NextAuth.js",
        "MaterialUI",
      ],
      githubLink: "https://github.com/morales-martin/todo-app"
    },
    {
      title: "Chord Search",
      roles: ["Full Stack Engineer", "UI Designer"],
      description:
        "Search platform for guitar players, which displays a grid of diagrams for accurate chord finger placement. - All diagrams (including interactive) are drawn using the HTML Canvas feature",
      desktop: "/chordsearch_desktop.png",
      mobile: "/chordsearch_mobile.png",
      chips: [
        "React.js",
        "AWS S3",
        "AWS Lambda",
        "MongoDB",
        "Express.js",
        "REST API",
        "Axios",
      ],
      githubLink: "https://github.com/morales-martin/Chord-Search"
    },
    {
      title: "Quickbnb",
      roles: ["Full Stack Engineer", "UI Designer"],
      description:
        "Web-based search platform using React, simplifying the search experience for Airbnb listings. Features include selecting multiple listings and sharing them with multiple email addresses.",
      desktop: "/quickbnb_desktop.png",
      mobile: "",
      chips: ["React.js", "Emailjs", "Vercel", "REST API"],
      githubLink: "https://github.com/morales-martin/Simple-Airbnb-Search"
    },
  ]);

  return (
    <div id="projects" className={`${className} ${styles.projectsContainer}`}>
      <div className={styles.scrollContainer}>
        {projects.map((project) => (
          <Project
            key={project.title}
            projectTitle={project.title}
            roles={project.roles}
            description={project.description}
            desktopImgUrl={project.desktop}
            mobileImgUrl={project.mobile}
            chips={project.chips}
            githubLink={project.githubLink}
            prodLink={project.prodLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
