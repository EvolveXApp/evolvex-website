import React, { Component } from "react";
import Header from "../../components/Header";
import Faq from "../../components/Faq";
import styles from "./ProgramOverview.module.scss";
import Layout from "../../components/Layout"


class ProgramOverview extends Component {
  render() {
    return <Layout> 
        <Header headerText="header-text-program-overview" heading="Program Overview"  text="The evolve<sup>x</sup> organization is developed to serve entrepreneurs,
                        designers, developers and media professionals globally. We develop 
                        key market awareness for young and seasoned professionals across a 
                        wide spectrum of industries."  imageSrc={"photo-1516905041604-7935af78f572.jpeg"} imageDimensions="header-image-program-overview"/>
        <div className={styles.container}>
        <Faq />
      </div>                
       </Layout>;
   
  }
}

export default ProgramOverview;
