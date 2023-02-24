import React from "react";
import Image from "next/image";
import styles from "./Project.module.css";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/system";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

const StyledChip = styled(Chip)(() => ({
  color: "var(--secondary)",
  border: "1px var(--secondary) solid",
  margin: "0.25rem 0.25rem 0.25rem 0",
}));

function Project({
  projectTitle,
  roles = [],
  description,
  chips = [],
  className = "",
  desktopImgUrl = "",
  mobileImgUrl = "",
  githubLink = "",
  prodLink = "",
}) {
  return (
    <div className={`${className} ${styles.projectContainer}`}>
      <div className={styles.content}>
        <div className={styles.header}>{projectTitle}</div>
        <div className={styles.titles}>{roles.join(" - ")}</div>
        <div className={styles.summary}>{description}</div>
        <div className={styles.technologies}>
          {chips.map((chip) => (
            <StyledChip
              size="small"
              key={chip}
              label={chip}
              variant="outlined"
            />
          ))}
        </div>
        <div className={styles.links}>
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              className={styles.icon}
            >
              <GitHubIcon />
            </a>
          )}
          {prodLink && (
            <a
              href={prodLink}
              target="_blank"
              rel="noreferrer"
              className={styles.icon}
            >
              <LaunchIcon />
            </a>
          )}
        </div>
      </div>
      <div className={styles.projectImages}>
        {desktopImgUrl && (
          <div className={styles.desktopContainer}>
            <Image
              alt="desktop image"
              src={desktopImgUrl}
              fill
              // placeholder="blur"
            />
          </div>
        )}
        {mobileImgUrl && (
          <div className={styles.mobileContainer}>
            <Image
              alt="mobile image"
              src={mobileImgUrl}
              fill
              // placeholder="blur"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Project;
