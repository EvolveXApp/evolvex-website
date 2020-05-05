import React, { Component } from "react";
import Hero from "../../components/Hero";
import WeConnect from "../../components/WeConnect";

class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <WeConnect />
      </div>
    );
  }
}
export default Home;
