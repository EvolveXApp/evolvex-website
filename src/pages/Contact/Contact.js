import React, { Component } from "react";
import Header from "../../components/Header";
import ApplicationForm from "../../components/ApplicationForm";
import NewProject from "../../components/NewProject";
import Layout from "../../components/Layout"
import "./style.scss";

class Contact extends Component {
  render() {
    return<Layout>
    <div className="contact-page">
        <Header headerText="header-text-contact" heading="Get In Touch"  text="Feel free to send us a message. We pride ourselves in communication. 
        If you don't hear back from us right away, thats a good thing! That
         means our program is thriving. Give us a call or text message instead."  imageSrc={"photo-1574315042617-f84e1847848a.jpeg"}
         imageDimensions = "header-image-contact"/>
        <NewProject />
        
        <ApplicationForm  headerStyle="border-yellow" heading="Your Career Starts Here"/>
        

      </div>
      </Layout>
      ;


  }
}
export default Contact;
