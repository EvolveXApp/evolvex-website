import React, { Component } from "react";
import Testimonials from "./Testimonials";
const data = [
  {
    title: "They",
    testimonials: [
      {
        profile: "https://placeimg.com/300/300/people",
        name: "Dominic Duarte",
        title: "UX Designer",
        comment:
          "The Evolve X program gave me the recourses and experience needed to build my portfolio and land a job as intermediate level UX designer. The job search is finally over! Couldn’t have done it without evolve.",
      },
      {
        profile: "https://placeimg.com/300/300/people",
        name: "Terry Anderson",
        title: "CEO of a Company",
        comment:
          "The Evolve X program gave me the recourses and experience needed to build my portfolio and land a job as intermediate level UX designer. The job search is finally over! Couldn’t have done it without evolve.",
      },
      {
        profile: "https://placeimg.com/300/300/people",
        name: "Rosalina Tacoma",
        title: "UI Designer",
        comment:
          "The Evolve X program gave me the recourses and experience needed to build my portfolio and land a job as intermediate level UX designer. The job search is finally over! Couldn’t have done it without evolve.",
      },
    ],
  },
  {
    title: "Love",
    testimonials: [
      {
        profile: "https://placeimg.com/300/300/people",
        name: "FirstName LastName",
        title: "Web Developer",
        comment:
          "The Evolve X program gave me the recourses and experience needed to build my portfolio and land a job as intermediate level UX designer. The job search is finally over! Couldn’t have done it without evolve.",
      },
      {
        profile: "https://placeimg.com/300/300/people",
        name: "FirstName LastName",
        title: "App Developer",
        comment:
          "The Evolve X program gave me the recourses and experience needed to build my portfolio and land a job as intermediate level UX designer. The job search is finally over! Couldn’t have done it without evolve.",
      },
      {
        profile: "https://placeimg.com/300/300/people",
        name: "FirstName LastName",
        title: "Somebody",
        comment:
          "The Evolve X program gave me the recourses and experience needed to build my portfolio and land a job as intermediate level UX designer. The job search is finally over! Couldn’t have done it without evolve.",
      },
    ],
  },
  {
    title: "Us!",
    testimonials: [
      {
        profile: "https://placeimg.com/300/300/people",
        name: "FirstName LastName",
        title: "Web Developer",
        comment:
          "The Evolve X program gave me the recourses and experience needed to build my portfolio and land a job as intermediate level UX designer. The job search is finally over! Couldn’t have done it without evolve.",
      },
      {
        profile: "https://placeimg.com/300/300/people",
        name: "FirstName LastName",
        title: "App Developer",
        comment:
          "The Evolve X program gave me the recourses and experience needed to build my portfolio and land a job as intermediate level UX designer. The job search is finally over! Couldn’t have done it without evolve.",
      },
      {
        profile: "https://placeimg.com/300/300/people",
        name: "FirstName LastName",
        title: "Somebody",
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
