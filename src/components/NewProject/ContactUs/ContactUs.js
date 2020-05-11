import React,{Component} from "react";
import "./contactUs.scss";
import {ContactUsData} from  "./ContactUsData";


class ContactUs extends Component
{
    render() {
        return (
          <div className ="contact-us">  
            
            {ContactUsData.map((data)=> (
                <div className = "contact-wrapper">
                    <div className="wrap">
                        <img alt="icon" src={data.imgSrc} className="contact-icon" />
                        <p className="contact-icon-description">{data.description}</p>
                    </div>
                </div>
                
            ))}

                
            
        </div>    
        );
      }
}

export default ContactUs;