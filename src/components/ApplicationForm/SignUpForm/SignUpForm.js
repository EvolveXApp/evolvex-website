import React,{Component} from "react";
import "./form.scss";
import ViewResourcesForm from "../ViewResourcesForm";
import Form from "./Form";

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
                        
                    <Form />
                    <button className="submitButton" onClick ={() => this.handleFormSubmission()} > Submit</button>
                        
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

