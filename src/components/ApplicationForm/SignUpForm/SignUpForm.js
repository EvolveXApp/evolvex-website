import React,{Component} from "react";
import "./form.scss";
import ViewResourcesForm from "../ViewResourcesForm";

class SignUpForm extends Component
{
    constructor(props)
    {
        super(props);
        this.isFormNotSubmitted = this.handleFormSubmission.bind(this);
        this.state = {isFormNotSubmitted: true};
    }

    handleFormSubmission()
    {
        this.setState({isFormNotSubmitted: false});
    }

    render(){
        const isFormNotSubmitted = this.state.isFormNotSubmitted;
        
        if(isFormNotSubmitted)
        {
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
                        <input type="button" className="submitButton" value="Submit" onClick ={() => this.handleFormSubmission()}/>
                </form>
                        
                </div>
            );
        }
        else
        {
            return(
                <ViewResourcesForm />
            );
        }
    }
}
export default SignUpForm;

