import React, { Component } from "react";
import Logo from "./Logo";
import "./styles.scss";
import SignUpForm from "./SignUpForm";




class ApplicationForm extends Component
{
  
    render() {
        return (
          <div className="sign-up-section">
            <p id={this.props.headerStyle} className="heading">{this.props.heading}</p>
            <div className="application-form-container">
             
                <Logo />
                <SignUpForm />
                
             
            </div>
          </div>
        );
      }
}

export default ApplicationForm;