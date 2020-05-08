import React, { Component } from "react";
import Logo from "./Logo";
import "./styles.scss";
import SignUpForm from "./SignUpForm";

class ApplicationForm extends Component
{
    render() {
        return (
          <div className="application-form">
            <p className="heading">Your Career Awaits You</p>
            <div className="application-form-container">
             
                <Logo />
                <SignUpForm />
                
             
            </div>
          </div>
        );
      }
}

export default ApplicationForm;