import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

const Testimonials = ({ classes, testimonials }) => {
  console.log(testimonials);
  return (
    <div className={classes.container}>
      <div className={classes.testimonials}>
        {testimonials.map((testimonial, index) => {
          console.log("Index of test", index);
          return (
            <div className={classes.card} key={index}>
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
