import React, { Component } from "react";
import Header from "../../components/Header";
import Faq from "../../components/Faq";
import styles from "./ProgramOverview.module.scss";

class ProgramOverview extends Component {
  render() {
    return <div> 
        <Header heading="Program Overview"  text="The evolve<sup>x</sup> organization is developed to serve entrepreneurs,
                        designers, developers and media professionals globally. We develop 
                        key market awareness for young and seasoned professionals across a 
                        wide spectrum of industries."  imageSrc={"photo-1516905041604-7935af78f572.jpeg"}/>
        <div className={styles.container}>
        <Faq />
      </div>                
       </div>;
   
  }
}

export default ProgramOverview;
