import React, { useState } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import Reveal from "react-reveal/Reveal";

const TeamCard = ({ classes, member }) => {
  const [hoverDisplay, setHoverDisplay] = useState(false);
  return (
    <div
      className={classes.container}
      onMouseOver={() => {
        setHoverDisplay(true);
      }}
      onMouseLeave={() => {
        setHoverDisplay(false);
      }}
    >
      {hoverDisplay === false ? (
        <>
          <div className={classes.profile}>
            <div className={classes.textContainer}>
              <Reveal>
                <h2 className={`${classes.text} ${classes.name}`}>
                  {member.name}
                </h2>
                <p className={`${classes.text} ${classes.title}`}>
                  {member.title}
                </p>
              </Reveal>
            </div>
            <Reveal>
              <img
                src={member.profileImage}
                alt={member.name}
                className={classes.profileImage}
              />
            </Reveal>
          </div>
          <svg width="230" height="260" className={classes.trapezoid}>
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
            <div className={classes.profileMOver}>
              <div className={classes.textContainerMOver}>
                <h2
                  className={`${classes.text} ${classes.name} ${classes.mouseOver}`}
                >
                  {member.name}
                </h2>
                <p
                  className={`${classes.text} ${classes.title} ${classes.mouseOver}`}
                >
                  {member.title}
                </p>
              </div>
              <img
                src={member.profileImage}
                alt={member.name}
                className={classes.profileImageMOver}
              />
            </div>
            <div>
              <p className={`${classes.text} ${classes.description}`}>
                {member.description}
              </p>
            </div>
          </Reveal>
        </>
      )}
    </div>
  );
};

export default withStyles(styles)(TeamCard);
