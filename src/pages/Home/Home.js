import React, { Component } from "react";
import Hero from "../../components/Hero";
import WeConnect from "../../components/WeConnect";
import ApplicationForm from "../../components/ApplicationForm";
import "./style.scss";

class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <WeConnect />
        <ApplicationForm headerStyle="border-blue" heading="Your Career Awaits You" />
        
      </div>
    );
  }
}
export default Home;
