import React, { useState } from "react";
import styles from "./styles.module.scss";
import Reveal from "react-reveal/Reveal";

const TeamCard = ({ classes, member }) => {
  const [hoverDisplay, setHoverDisplay] = useState(false);
  return (
    <div
      className={styles.container}
      onMouseOver={() => {
        setHoverDisplay(true);
      }}
      onMouseLeave={() => {
        setHoverDisplay(false);
      }}
    >
      {hoverDisplay === false ? (
        <>
          <div className={styles.profile}>
            <div className={styles.textContainer}>
              <Reveal>
                <h2 className={`${styles.text} ${styles.name}`}>
                  {member.name}
                </h2>
                <p className={`${styles.text} ${styles.title}`}>
                  {member.title}
                </p>
              </Reveal>
            </div>
            <Reveal>
              <img
                src={member.profileImage}
                alt={member.name}
                className={styles.profileImage}
              />
            </Reveal>
          </div>
          <svg width="230" height="260" className={styles.trapezoid}>
            <path
              fill="#3671B7"
              strokeWidth="7"
              strokeLinejoin="round"
              stroke="#3671B7"
              d="M 10,10
            L 225,120
            L 225,250
            L 10,250
            L 10,10
            Z
        "
            />
          </svg>
        </>
      ) : (
        <>
          <Reveal>
            <div className={styles.profileMOver}>
              <div>
                <h2
                  className={`${styles.text} ${styles.name} ${styles.mouseOver}`}
                >
                  {member.name}
                </h2>
                <p
                  className={`${styles.text} ${styles.title} ${styles.mouseOver}`}
                >
                  {member.title}
                </p>
              </div>
              <img
                src={member.profileImage}
                alt={member.name}
                className={styles.profileImageMOver}
              />
            </div>
            <div>
              <p className={`${styles.text} ${styles.description}`}>
                {member.description}
              </p>
            </div>
          </Reveal>
        </>
      )}
    </div>
  );
};

export default TeamCard;
