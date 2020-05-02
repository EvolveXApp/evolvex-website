import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

const ImageListItem = (props) => {
  const { data, classes } = props;
  const backgroundColours = ["#3671B7", "#ECB71F", "#DE1C54"];
  let colourValue = 0;
  return (
    <div className={classes.container}>
      {data.map((item) => (
        <div className={classes.item} key={item.position}>
          <div
            style={{ backgroundColor: backgroundColours[colourValue] }}
            className={
              item.position % 2 === 0
                ? classes.flipImage
                : classes.imageContainer
            }
          >
            <img src={item.image} alt={item.title} title={item.title} />
          </div>
          <div
            className={
              item.id % 2 === 0 ? classes.flipText : classes.textContainer
            }
          >
            <div className={classes.titleContainer}>
              <p className={classes.title}>{item.title}</p>
            </div>
            <p className={classes.description}>{item.description}</p>
          </div>
          {colourValue === 2 ? (colourValue = 0) : colourValue++}
        </div>
      ))}
    </div>
  );
};

export default withStyles(styles)(ImageListItem);
