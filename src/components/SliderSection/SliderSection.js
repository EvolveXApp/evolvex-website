import React from "react";
import { SlideCard } from "./SlideCard/SlideCard";
import { Slides } from "./SlideCard/Slides";
import styles from "./SliderSection.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import rightArrow from "../../assets/icons/right_arrow.png";
import leftArrow from "../../assets/icons/left_arrow.png";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <img src={rightArrow} alt="arrow_left" />
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <img src={leftArrow} alt="arrow_left" />
    </div>
  );
}

export default function SliderSection() {
  let settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    className: "slides",

    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const info = Slides.map((Slide) => (
    <SlideCard image={Slide.image} name={Slide.name} content={Slide.content} />
  ));

  return (
    <div className={styles.slideItemContainer}>
      <Slider {...settings}>{info}</Slider>
    </div>
  );
}
