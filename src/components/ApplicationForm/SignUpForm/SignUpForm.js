import React,{Component} from "react";
import "./form.scss";

class SignUpForm extends Component
{
    render(){
        return(
            <form className="form">
                <div className="form-container">
                    <input className="fields" type="text" value="Name" readOnly />
                    <input className="fields" type="text" value="Portfolio" readOnly />
                    <input className="fields" type="text" value="Email" readOnly />
                    
                    <input className="fields" type="text" value="LinkedIn" readOnly />
                    <input className="fields" type="text" value="Phone" readOnly />
                    <input className ="buttons" type="button" value="Resume / CV" />
                    <input className="fields" type="text" value="Profession" readOnly />
                    
                    <input className="buttons" type="button" value="Cover Letter" />

                    
                </div>
               
                <input className="submitButton" type="submit" value="Submit" />
                  
                
            </form>
        );
    }
}

export default SignUpForm;