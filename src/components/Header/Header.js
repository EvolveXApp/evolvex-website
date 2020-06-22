import React,{Component} from "react";
import "./header.scss";

class Header extends Component
{
    render() {
        return (
          <div className = "header">  
            <div className="header-container">
                <div className="header-text" id={this.props.headerText}>
                    <p className="header-heading">{this.props.heading}
                    <span className="period">.</span>
                    </p>

                    <p className="header-intro" dangerouslySetInnerHTML = {{__html: this.props.text}} >
                        
                    </p>  
                </div>    
                <div className="header-image" id={this.props.imageDimensions}>
                    <img src={require("../../assets/images/"+ this.props.imageSrc)} alt="" className="image" />
                </div>
            </div>        
        </div>    
        );
      }
}

export default Header;