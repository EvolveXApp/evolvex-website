import React, { Component } from "react";
import Testimonials from "./Testimonials";

import Dominc from "../../assets/testimonials/domincduarte.png";
import Peter from "../../assets/testimonials/terryanderson.png";
import Anne from "../../assets/testimonials/annemacdonald.png";

import Terry from "../../assets/testimonials/terryanderson.png";
import Shiela from "../../assets/testimonials/shielaaini.png";
import Frederick from "../../assets/testimonials/fredrickrowley.png";

import Rosalina from "../../assets/testimonials/rosalinatacoma.png";
import Phil from "../../assets/testimonials/phildallaz.png";
import Tina from "../../assets/testimonials/tinaduarte.png";
const data = [
  {
    title: "They",
    testimonials: [
      {
        profile: Dominc,
        name: "Dominic Duarte",
        title: "UX Designer",
        comment:
          "The Evolve X program gave me the recourses and experience needed to build my portfolio and land a job as intermediate level UX designer. The job search is finally over! Couldn’t have done it without evolve.",
      },
      {
        profile: Peter,
        name: "Peter Anderson",
        title: "Business Owner",
        comment:
          "The Evolve X program gave me the recourses and experience needed to build my portfolio and land a job as intermediate level UX designer. The job search is finally over! Couldn’t have done it without evolve.",
      },
      {
        profile: Anne,
        name: "Anne Macdonald",
        title: "Graphic Designer",
        comment:
          "The Evolve X program gave me the recourses and experience needed to build my portfolio and land a job as intermediate level UX designer. The job search is finally over! Couldn’t have done it without evolve.",
      },
    ],
  },
  {
    title: "Love",
    testimonials: [
      {
        profile: Terry,
        name: "Terry Anderson",
        title: "Business Owner",
        comment:
          "The Evolve X program gave me the recourses and experience needed to build my portfolio and land a job as intermediate level UX designer. The job search is finally over! Couldn’t have done it without evolve.",
      },
      {
        profile: Shiela,
        name: "Shiela Aini",
        title: "Film Intern",
        comment:
          "The Evolve X program gave me the recourses and experience needed to build my portfolio and land a job as intermediate level UX designer. The job search is finally over! Couldn’t have done it without evolve.",
      },
      {
        profile: Frederick,
        name: "Fredrick Rowley",
        title: "App Development Intern",
        comment:
          "The Evolve X program gave me the recourses and experience needed to build my portfolio and land a job as intermediate level UX designer. The job search is finally over! Couldn’t have done it without evolve.",
      },
    ],
  },
  {
    title: "Us!",
    testimonials: [
      {
        profile: Rosalina,
        name: "Rosalina Tacoma",
        title: "Web Development Intern",
        comment:
          "The Evolve X program gave me the recourses and experience needed to build my portfolio and land a job as intermediate level UX designer. The job search is finally over! Couldn’t have done it without evolve.",
      },
      {
        profile: Phil,
        name: "Phil Dallaz",
        title: "Startup Investor",
        comment:
          "The Evolve X program gave me the recourses and experience needed to build my portfolio and land a job as intermediate level UX designer. The job search is finally over! Couldn’t have done it without evolve.",
      },
      {
        profile: Tina,
        name: "Tina Duarte",
        title: "UI Design Intern",
        comment:
          "The Evolve X program gave me the recourses and experience needed to build my portfolio and land a job as intermediate level UX designer. The job search is finally over! Couldn’t have done it without evolve.",
      },
    ],
  },
];
class TestimonialsContainer extends Component {
  render() {
    return <Testimonials data={data}></Testimonials>;
  }
}

export default TestimonialsContainer;
