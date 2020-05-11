import React,{Component} from "react";
import "./newProjectForm.scss";

class NewProjectForm extends Component
{
    render() {
        return (
        <form className="new-project-form">
            <div className="new-project-form-container">
                <div className="text-fields">
                <input className="new-project-fields" type="text" value="Name" readOnly />
                <input className="new-project-fields" id="field-email" type="text" value="Email" readOnly />
                <input className="new-project-fields" type="text" value="Phone" readOnly />
                <input className="new-project-fields" type="text" value="Company Name" readOnly />
                </div>

                <div className="project-resume">
                <p className="text-style"> Project Type</p>
                <select  className="new-project-type" >
                    <option value="" disabled selected>Select All That Apply</option>
                </select>
                
                <p className="text-style">Tell Us About Your Project</p>
                <textarea className="project-textarea"></textarea>
                </div>
                
                
                
            </div>
           
            <input className="submitButton" type="submit" value="Submit" />
              
            
        </form>    
        );
      }
}

export default NewProjectForm;