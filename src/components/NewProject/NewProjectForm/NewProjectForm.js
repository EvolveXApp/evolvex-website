import React,{Component} from "react";
import "./newProjectForm.scss";

class NewProjectForm extends Component
{
    render() {
        return (
        <form className="new-project-form">
            <div className="new-project-form-container">
                <div className="text-fields">
                    <input className="new-project-fields" type="text" value="" placeholder="Name" readOnly />
                    <input className="new-project-fields" id="field-email" type="text" value="" placeholder="Email" readOnly />
                    <input className="new-project-fields" type="text" value="" placeholder="Phone" readOnly />
                    <input className="new-project-fields" type="text" value="" placeholder="Company Name" readOnly />
                </div>

                <div className="project-resume">
                    <p className="text-style"> Project Type</p>
                    <select  className="new-project-type" defaultValue={"DEFAULT"}>
                        <option value="DEFAULT" disabled>Select All That Apply</option>
                    </select>
                    
                    <p className="text-style">Tell Us About Your Project</p>
                    <textarea className="project-textarea"></textarea>
                </div>
                
                
                
            </div>
           
            <div className="submit-button-container">
                <input className="submitButton" type="submit" value="Submit" />
            </div>    
              
            
        </form>    
        );
      }
}

export default NewProjectForm;