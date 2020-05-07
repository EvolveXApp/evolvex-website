import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

const Testimonials = ({ classes, testimonials }) => {
  const backgroundColours = ["#3671B7", "#ECB71F", "#DE1C54"];
  let colourValue = -1;
  return (
    <div className={classes.container}>
      <div className={classes.testimonials}>
        <p className={classes.cardTitle}>They</p>
        <p className={`${classes.cardTitle} ${classes.OffSet}`}>Love</p>
        <p className={`${classes.cardTitle} ${classes.OffSetSecond}`}>Us!</p>
        {testimonials.map((testimonial, index) => {
          console.log("Colour", colourValue);
          colourValue === 2 ? (colourValue = 0) : colourValue++;
          return (
            <div
              className={classes.card}
              key={index}
              style={{
                boxShadow: `5px 2px 20px ${backgroundColours[colourValue]}`,
              }}
            >
              <img
                className={classes.profile}
                src={testimonial.profile}
                alt={testimonial.name}
              />
              <h2 className={classes.name}>{testimonial.name}</h2>
              <p className={classes.title}>{testimonial.title}</p>
              <p className={classes.comment}>"{testimonial.comment}"</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default withStyles(styles)(Testimonials);
