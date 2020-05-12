import React,{Component} from "react";
import "./form.scss";

class Form extends Component
{
    
    render(){
        return(
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
                
                   

                    
            </form>
        );
    }
}

export default Form;