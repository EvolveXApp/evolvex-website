import React from "react";
import styles from "./styles.module.scss";

const ImageListItem = (props) => {
  const { data } = props;
  const backgroundColours = ["#3671B7", "#ECB71F", "#DE1C54"];
  let colourValue = 0;
  const handleColour = () => {
    colourValue === 2 ? (colourValue = 0) : colourValue++;
  };
  return (
    <div class={styles.container}>
      {data.map((item) => (
        <div className={styles.item} key={item.position}>
          <div
            style={{ backgroundColor: backgroundColours[colourValue] }}
            className={
              window.innerWidth > 700 && item.position % 2 === 0
                ? styles.flipImage
                : styles.imageContainer
            }
          >
            <img src={item.image} alt={item.title} title={item.title} />
          </div>
          <div
            className={
              window.innerWidth > 700 && item.position % 2 === 0
                ? styles.flipText
                : styles.textContainer
            }
          >
            <div className={styles.titleContainer}>
              <p className={styles.title}>{item.title}</p>
            </div>
            <p className={styles.description}>{item.description}</p>
          </div>
          {handleColour()}
        </div>
      ))}
    </div>
  );
};

export default ImageListItem;
