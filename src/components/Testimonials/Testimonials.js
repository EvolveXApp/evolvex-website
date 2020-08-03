import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

const Testimonials = ({ classes, data }) => {
  const backgroundColours = ["#3671B7", "#ECB71F", "#DE1C54"];
  const offSetMargins = [0, 80, 160];
  let cardValue = -1;
  const [isMobile, setMobile] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      window.innerWidth < 700 && setMobile(true);
      window.innerWidth > 700 && setMobile(false);
    };

    window.addEventListener("resize", handleResize);
  }, [isMobile]);

  return isMobile ? (
    <div>MObiel only</div>
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
