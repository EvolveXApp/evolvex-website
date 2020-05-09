import React, { Component } from "react";
import ResourceType from "../../components/ResourceType/";
import Header from "../../components/Header";

class Resources extends Component {
  render() {
    return (
      <div>
        <Header heading="We're Here to Help You Learn"  text="The evolveˣ organization is developed to serve entrepreneurs, 
        designers, developers and media professionals globally. We develop 
        key market awareness for young and seasoned professionals across a 
        wide spectrum of industries."  imageSrc={"photo-1574315042617-f84e1847848a.jpeg"}/>
        <ResourceType />{" "}

      </div>
    );
  }
}

export default Resources;
