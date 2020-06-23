import React, { Component } from "react";
import Hero from "../../components/Hero";
import WeConnect from "../../components/WeConnect";
import ApplicationForm from "../../components/ApplicationForm";
import ImageList from "../../components/ImageList";
import Testimonials from "../../components/Testimonials";
import Layout from "../../components/Layout";
import "./style.scss";
import SliderSection from "../../components/SliderSection";

class Home extends Component {
  render() {
    return (
      <Layout>
        <Hero />
        <ImageList />
        <SliderSection />
        <WeConnect />
        <Testimonials />
        <ApplicationForm
          headerStyle="border-blue"
          heading="Your Career Awaits You"
        />
      </Layout>
    );
  }
}
export default Home;
