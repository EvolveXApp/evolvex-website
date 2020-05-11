import React,{Component} from "react";
import "./newProjectForm.scss";

class NewProjectForm extends Component
{
    render() {
        return (
        <form className="new-project-form">
            <div className="new-project-form-container">
                <input className="fields" type="text" value="Name" readOnly />
                <div>
                <p className="field-text"> Project Type</p>
                <select className="new-project-type">
                    <option value="" disabled selected>Select All That Apply</option>

                </select>    
                </div>
                <input className="fields" type="text" value="Email" readOnly />
                <div>
                <p className="field-text">Tell Us About Your Project</p>
                <textarea className="project-textarea"></textarea>
                </div>
                <input className="fields" type="text" value="Phone" readOnly />
                <input className="fields" type="text" value="Company Name" readOnly />
                
            </div>
           
            <input className="submitButton" type="submit" value="Submit" />
              
            
        </form>    
        );
      }
}

export default NewProjectForm;