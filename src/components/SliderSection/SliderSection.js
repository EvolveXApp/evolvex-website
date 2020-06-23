import React from "react";
import { SlideCard } from "./SlideCard/SlideCard";
import { Slides } from "./SlideCard/Slides";
import styles from "./SliderSection.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderSection() {
  let settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
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
