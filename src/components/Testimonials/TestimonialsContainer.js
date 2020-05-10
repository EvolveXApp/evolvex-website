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
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type book. ",
      },
      {
        profile: "https://placeimg.com/300/300/people",
        name: "Terry Anderson",
        title: "CEO of a Company",
        comment:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type book. ",
      },
      {
        profile: "https://placeimg.com/300/300/people",
        name: "Rosalina Tacoma",
        title: "UI Designer",
        comment:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type book. ",
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
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type book. ",
      },
      {
        profile: "https://placeimg.com/300/300/people",
        name: "FirstName LastName",
        title: "App Developer",
        comment:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type book. ",
      },
      {
        profile: "https://placeimg.com/300/300/people",
        name: "FirstName LastName",
        title: "Somebody",
        comment:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type book. ",
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
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type book. ",
      },
      {
        profile: "https://placeimg.com/300/300/people",
        name: "FirstName LastName",
        title: "App Developer",
        comment:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type book. ",
      },
      {
        profile: "https://placeimg.com/300/300/people",
        name: "FirstName LastName",
        title: "Somebody",
        comment:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type book. ",
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
