import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

const Testimonials = ({ classes, data }) => {
  const backgroundColours = ["#3671B7", "#ECB71F", "#DE1C54"];
  const offSetMargins = [0, 80, 160];
  let cardValue = -1;
  return (
    <div className={classes.container}>
      <div className={classes.testimonials}>
        {data.map((items, index) => {
          cardValue === 2 ? (cardValue = 0) : cardValue++;
          return (
            <div
              key={index}
              className={classes.section}
              style={{ marginTop: `${offSetMargins[cardValue]}px ` }}
            >
              <h2
                className={classes.cardTitle}
                style={{ color: `${backgroundColours[cardValue]}` }}
              >
                {items.title}
              </h2>
              {items.testimonials.map((testimonial, index) => (
                <div
                  className={classes.card}
                  key={index}
                  style={{
                    boxShadow: `5px 2px 20px ${backgroundColours[cardValue]}`,
                  }}
                >
                  <img
                    className={classes.profile}
                    src={testimonial.profile}
                    alt={testimonial.name}
                  />
                  <div className={classes.nameContainer}>
                    <h2 className={classes.name}>{testimonial.name}</h2>
                  </div>
                  <p className={classes.title}>{testimonial.title}</p>
                  <p className={classes.comment}>"{testimonial.comment}"</p>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default withStyles(styles)(Testimonials);
