import React, { Component } from "react";
import Hero from "../../components/Hero";
import WeConnect from "../../components/WeConnect";
import ApplicationForm from "../../components/ApplicationForm";
import ImageList from "../../components/ImageList";
import Testimonials from "../../components/Testimonials";
import "./style.scss";

class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <ImageList />
        <WeConnect />
        <Testimonials />
        <ApplicationForm headerStyle="border-blue" heading="Your Career Awaits You" />
        
      </div>
    );
  }
}
export default Home;
