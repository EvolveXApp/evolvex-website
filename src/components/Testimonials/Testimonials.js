import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Fade from "react-reveal/Fade";

const Testimonials = ({ data }) => {
  const isSSR = typeof window === "undefined";
  const backgroundColours = ["#3671B7", "#ECB71F", "#DE1C54"];
  const offSetMargins = [0, 80, 160];
  let cardValue = -1;
  let titleValue = -1;
  const [isMobile, setMobile] = useState(true);
  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      window.innerWidth < 700 && setMobile(true);
      window.innerWidth > 700 && setMobile(false);
    };

    if (!isSSR) {
      window.addEventListener("resize", handleResize);
    }
  }, [isMobile]);

  return isMobile ? (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        {!isSSR && window.innerWidth > 700 && setMobile(false)}
        {data.map((items, index) => {
          titleValue === 2 ? (titleValue = 0) : titleValue++;
          return (
            <h2
              key={index}
              className={styles.cardTitle}
              style={{ color: `${backgroundColours[titleValue]}` }}
            >
              {items.title}
            </h2>
          );
        })}
      </div>
      <div className={styles.testimonials} id={"testimonials"}>
        {data.map((items, index) => {
          cardValue === 2 ? (cardValue = 0) : cardValue++;
          if ((showMore === true && index > 0) || index === 0) {
            return (
              <div>
                {items.testimonials.map((testimonial, index) => {
                  return (
                    <Fade spy={showMore}>
                      <div
                        className={styles.card}
                        key={index}
                        style={{
                          boxShadow: `5px 2px 20px ${backgroundColours[cardValue]}`,
                        }}
                      >
                        <img
                          className={styles.profile}
                          src={testimonial.profile}
                          alt={testimonial.name}
                        />
                        <div className={styles.nameContainer}>
                          <h2 className={styles.name}>{testimonial.name}</h2>
                        </div>
                        <p className={styles.title}>{testimonial.title}</p>
                        <p className={styles.comment}>
                          "{testimonial.comment}"
                        </p>
                      </div>
                    </Fade>
                  );
                })}
              </div>
            );
          }
          return <div></div>;
        })}
        <a href="#testimonials" className={styles.buttonContainer}>
          {showMore === false ? (
            <button
              className={styles.button}
              onClick={() => {
                setShowMore(true);
              }}
            >
              Show More
            </button>
          ) : (
            <button
              className={styles.button}
              onClick={() => {
                setShowMore(false);
              }}
            >
              Show Less
            </button>
          )}
        </a>
      </div>
    </div>
  ) : (
    <div className={styles.container}>
      <div className={styles.testimonials}>
        {data.map((items, index) => {
          cardValue === 2 ? (cardValue = 0) : cardValue++;
          return (
            <div
              key={index}
              className={styles.section}
              style={{ marginTop: `${offSetMargins[cardValue]}px ` }}
            >
              <h2
                className={styles.cardTitle}
                style={{ color: `${backgroundColours[cardValue]}` }}
              >
                {items.title}
              </h2>
              {items.testimonials.map((testimonial, index) => (
                <div
                  className={styles.card}
                  key={index}
                  style={{
                    boxShadow: `5px 2px 20px ${backgroundColours[cardValue]}`,
                  }}
                >
                  <img
                    className={styles.profile}
                    src={testimonial.profile}
                    alt={testimonial.name}
                  />
                  <div className={styles.nameContainer}>
                    <h2 className={styles.name}>{testimonial.name}</h2>
                  </div>
                  <p className={styles.title}>{testimonial.title}</p>
                  <p className={styles.comment}>"{testimonial.comment}"</p>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
