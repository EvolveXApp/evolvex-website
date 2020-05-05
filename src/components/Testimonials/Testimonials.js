import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

const Testimonials = ({ classes, testimonials }) => {
  console.log(testimonials);
  return (
    <div>
      {testimonials.map((testimonial, index) => {
        return (
          <div>
            <img src={testimonial.profile} alt="Profile" />
            <h2>{testimonial.name}</h2>
            <p>{testimonial.title}</p>
            <p>{testimonial.comment}</p>
          </div>
        );
      })}
    </div>
  );
};

export default withStyles(styles)(Testimonials);
