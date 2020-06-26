import React,{Component} from "react";
import {SocialLinks} from "./SocialContactData";
import "./socialContact.scss";

class SocialContact extends Component
{
    render() {
        return (
          <div className = "social-links-container">
              {SocialLinks.map((images) =>
                (<img key = {images.id} src={images.imgSrc} className="social-links" alt="socialLinks"/>)
              
              )}  
            
            </div>
            
    
        );
      }
}

export default SocialContact;