import React,{Component} from "react";
import "./viewResourcesForm.scss";

class ViewResourcesForm extends Component
{
    render(){
        return(
            <div className="view-resources-wrapper">
                <p className="view-resources-text">
                Thank you for submitting your application for admission to the Evolveˣ 
                Internship Program. Our recruitment team will thouroughly examine your 
                submission. Expect to be hearing from us! You will receive a follow up email 
                when we conclude with your submission. Feel free to take a look at
                our online resources in the meantime.

                </p>
                <input type="button" id="view-resources-submit-button" className="submitButton" value="View Resources" />
            
            </div>    
        );
    }
}

export default ViewResourcesForm;