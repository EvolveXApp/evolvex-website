import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

const Testimonials = ({ classes, data }) => {
  console.log("Testimonials", data);
  const backgroundColours = ["#3671B7", "#ECB71F", "#DE1C54"];
  let cardValue = -1;
  return (
    <div className={classes.container}>
      <div className={classes.testimonials}>
        {data.map((items, index) => {
          cardValue === 2 ? (cardValue = 0) : cardValue++;
          return (
            <div key={index} className={classes.section}>
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
                  <h2 className={classes.name}>{testimonial.name}</h2>
                  <p>{testimonial.title}</p>
                  <p>"{testimonial.comment}"</p>
                </div>
              ))}
            </div>
          );
        })}
      </div>
      {/* <div className={classes.testimonials}>
        <p className={classes.cardTitle}>They</p>
        <p className={`${classes.cardTitle} ${classes.OffSet}`}>Love</p>
        <p className={`${classes.cardTitle} ${classes.OffSetSecond}`}>Us!</p>
        {testimonials.map((testimonial, index) => {
          cardValue === 2 ? (cardValue = 0) : cardValue++;
          return (
            <div
              className={classes.card}
              key={index}
              style={{
                boxShadow: `5px 2px 20px ${backgroundColours[cardValue]}`,
                margin: `${offSetMargins[cardValue]}px 0`,
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
      </div> */}
    </div>
  );
};

export default withStyles(styles)(Testimonials);
