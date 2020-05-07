import React,{Component} from "react";
import "./overview.scss";

class Overview extends Component
{
    render() {
        return (
          <div className="overview">
            <div className="overview-text">
                <h1 className="header">Program Overview
                <span className="period">.</span>
                </h1>

                <p className="overview-intro">
                    The evolve<sup>x</sup> organization is developed to serve entrepreneurs,
                    designers, developers and media professionals globally. We develop 
                    key market awareness for young and seasoned professionals across a 
                    wide spectrum of industries. 
                </p>  
            </div>    
            <div className="overview-image">
            </div>    
        </div>    
        );
      }
}

export default Overview;