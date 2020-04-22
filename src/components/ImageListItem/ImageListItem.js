import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

const ImageListItem = (props) => {
  const { data, classes } = props;
  console.log("Data", data);
  return (
    <div className={classes.container}>
      {data.map((item) => (
        <div className={classes.item} key={item.position}>
          <img
            src={item.image}
            alt={item.title}
            title={item.title}
            className={
              item.position % 2 === 0 ? classes.flipImage : classes.image
            }
          />
          <div className={item.id % 2 === 0 && classes.flipText}>
            <p className={classes.title}>{item.title}</p>
            <p className={classes.description}>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default withStyles(styles)(ImageListItem);
