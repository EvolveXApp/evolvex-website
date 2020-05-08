import React, { Component } from "react";
import Hero from "../../components/Hero";
import WeConnect from "../../components/WeConnect";
import ApplicationForm from "../../components/ApplicationForm";

class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <WeConnect />
        <ApplicationForm heading="Your Career Awaits You"/>
      </div>
    );
  }
}
export default Home;
