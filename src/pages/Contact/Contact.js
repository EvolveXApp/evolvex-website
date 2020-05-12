import React, { Component } from "react";
import Header from "../../components/Header";
import ApplicationForm from "../../components/ApplicationForm";

class Contact extends Component {
  render() {
    return <div>
        <Header heading="Get In Touch"  text="Feel free to send us a message. We pride ourselves in communication. 
        If you don't hear back from us right away, thats a good thing! That
         means our program is thriving. Give us a call or text message instead."  imageSrc={"photo-1574315042617-f84e1847848a.jpeg"}/>
        <ApplicationForm />
      </div>;


  }
}
export default Contact;
