import React, { useState } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
const TeamCard = ({ classes, member }) => {
  const [hoverDisplay, setHoverDisplay] = useState("none");
  return (
    <div className={classes.container}>
      <div
        className={classes.profile}
        onMouseOver={() => {
          setHoverDisplay("block");
        }}
        onMouseLeave={() => {
          setHoverDisplay("none");
        }}
      >
        <div className={classes.textContainer}>
          <h2 className={`${classes.text} ${classes.name}`}>{member.name}</h2>
          <p className={`${classes.text} ${classes.title}`}>{member.title}</p>
        </div>
        <img
          src={member.profileImage}
          alt={member.name}
          className={classes.profileImage}
        />
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
      <p className={classes.text} style={{ display: `${hoverDisplay}` }}>
        {member.description}
      </p>
    </div>
  );
};

export default withStyles(styles)(TeamCard);
