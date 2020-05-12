import React, { Component } from "react";
import Hero from "../../components/Hero";
import WeConnect from "../../components/WeConnect";
import ApplicationForm from "../../components/ApplicationForm";
import ImageList from "../../components/ImageList";
import Testimonials from "../../components/Testimonials";
class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <ImageList />
        <WeConnect />
        <Testimonials />
        <ApplicationForm />
      </div>
    );
  }
}
export default Home;
