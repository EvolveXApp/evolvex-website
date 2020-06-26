  import React,{Component} from "react";
import "./newProject.scss";
import ContactUs from "./ContactUs";
import SocialContact from "./SocialContact";
import NewProjectForm from "./NewProjectForm";

class NewProject extends Component
{
    render() {
        return (
          <div className = "new-project">  
            <p className="title">Have a Project in Mind?</p> 
            <div className="new-project-container">
              <div>
                <ContactUs />
                <SocialContact />
              </div>
              
              <NewProjectForm />
            </div>        
        </div>    
        );
      }
}

export default NewProject;