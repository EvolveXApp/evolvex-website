import React, { Component } from "react";
import ResourceType from "../../components/ResourceType/";
import Header from "../../components/Header";
import "./style.scss";
import Layout from "../../components/Layout"

class Resources extends Component {
  render() {
    return (
      <Layout>
        <Header headerText="header-text-resources" heading="We're Here to Help You Learn"  text="The evolveˣ organization is developed to serve entrepreneurs, 
        designers, developers and media professionals globally. We develop 
        key market awareness for young and seasoned professionals across a 
        wide spectrum of industries."  imageSrc={"Screen Shot 2020-04-01 at 2.18 1.png"} imageDimensions="header-image-resources"/>
        <ResourceType />{" "}

      </Layout>
    );
  }
}

export default Resources;
