import React from "react";
import styles from "./Summary.module.css";

function Summary({ className }) {
  return (
    <div id="about" className={`${className} ${styles.container}`}>
      <div className={styles.content}>
        <div className={styles.text}>
          <p>
            I am a highly skilled and passionate software engineer with
            expertise in creating web applications using{" "}
            <span className={styles.highlight}>JavaScript</span>,{" "}
            <span className={styles.highlight}>React.js</span>,{" "}
            <span className={styles.highlight}>Express.js</span> and{" "}
            <span className={styles.highlight}>Node.js</span>. My technical
            proficiency also includes experience in databases such as{" "}
            <span className={styles.highlight}>MongoDB</span>
            and <span className={styles.highlight}>SQL</span>, using{" "}
            <span className={styles.highlight}>REST</span> and{" "}
            <span className={styles.highlight}>GraphQL APIs</span> as well as
            cloud computing platforms like{" "}
            <span className={styles.highlight}>Amazon Web Services (AWS)</span>.
          </p>
          <p>
            I take pride in <span className={styles.highlight}>designing</span>,{" "}
            <span className={styles.highlight}>developing</span>, and{" "}
            <span className={styles.highlight}>deploying</span> quality software
            solutions that meet the unique needs of users. My passion for
            software engineering drives me to{" "}
            <span className={styles.highlight}>continuously learn</span> and
            implement new technologies, staying up-to-date with the{" "}
            <span className={styles.highlight}>latest trends</span> in the
            field.
          </p>
          <p>
            I am excited to use my skills to build{" "}
            <span className={styles.highlight}>cutting-edge</span> web
            applications and make a positive impact in the world of software
            engineering.
          </p>
        </div>
      </div>
      <div className={`${styles.backdrop} ${styles.bottom}`}>
        <pre>
          <code>
            {`
import React, { useState, useEffect } from 'react';
import styles from ‘./Summary.module.css;

const Summary = () => {
  const [ coworkers, setCoworkers ] = useState();

  useEffect(() => ({
     fetch('https://randomuser.me/api/')
       .then((response) => response.json())
       .then((data) => setCoworkers(data.results.map((user) => 
             ({name: user.name.first + " "user.name.last,
               email: user.email, 
               picture: user.picture.medium
              }))
            ))`}
          </code>
        </pre>
      </div>
      <div className={`${styles.backdrop} ${styles.center}`}>
        <pre>
          <code>
            {`
         )
        },[]);
      
        return (
          <div className={styles.aboutMe}>
            <h1>About me</h1>
            <p>
                   I am a highly skilled and passionate software engineer with 
                   expertise in creating web applications using JavaScript, 
                   SQL, React.js, and Node.js. My technical proficiency also 
                   includes experience in databases such as MongoDB and MS SQL, 
                   as well as cloud computing platforms like Amazon Web Services (AWS).
             </p>
             <p>
                   I take pride in designing, developing, and deploying quality
                 software solutions that meet the unique needs of users. 
                 My passion for software engineering drives me to continuously 
                    learn and implement new technologies, staying 
                   up-to-date with the latest trends in the field.
             </p>
             <p>
                   I am excited to use my skills to build cutting-edge 
                 web applications and make a positive impact 
                   in the world of software engineering.
             </p>
            <div className={styles.coworkers}>
               <h1>Here are people I have worked with!<h1>
               {coworkers.map((coworker) => {
                    return (
                     <div className={styles.coworker}>
                        <p>{coworker.name}</p>
                        <img src={coworker.picture} />
                        <p>{coworker.email}</p>
                     </div>
                    )
                })}
            </div>
            <div className={styles.projects}>
                <h1>Here are some projects I have worked on!</h2>
            `}
          </code>
        </pre>
      </div>
      <div className={`${styles.backdrop} ${styles.top}`}>
        <pre>
          <code>
            {`
                  {projects.map((project) => {
                    return (
                      <div className={styles.project}>
                         <h2>{project.name}</h2>
                         <p>{project.description}</p>
                      </div>
                    )
                 }
               } 
              </div>
            </div>
          );
        };
        
        export default Summary;`}
          </code>
        </pre>
      </div>
    </div>
  );
}

export default Summary;
