import React,{Component} from "react";
import "./form.scss";
import ViewResourcesForm from "../ViewResourcesForm";


class SignUpForm extends Component
{
    state = { showing: true };
    render(){
        const { showing } = this.state
        return(
            <div className="form-wrapper">
                <form className="form">
                    <div className="form-container">
                        <input className="fields" type="text" value="" placeholder="Name" readOnly />
                        <input className="fields" type="text" value="" placeholder="Portfolio" readOnly />
                        <input className="fields" type="text" value="" placeholder="Email" readOnly />
                        
                        <input className="fields" type="text" value="" placeholder="LinkedIn" readOnly />
                        <input className="fields" type="text" value="" placeholder="Phone" readOnly />
                        <input className ="buttons" type="button" value="Resume / CV" />
                        <input className="fields" type="text" value="" placeholder="Profession" readOnly />
                        
                        <input className="buttons" type="button" value="Cover Letter" />

                        
                    </div>
                
                    <input className="submitButton" type="submit" value="Submit" onClick = {() => this.setState({showing: !showing})} />
                    {
                        showing ? <ViewResourcesForm /> : null

                    }
                    
                    
                </form>
            
            </div>    
        );
    }
}

export default SignUpForm;