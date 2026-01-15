import React from "react";
import "./techekement.css"
export default function TechElement(props){
    return (
        <div className="tech-element">
            {props.tech}
        </div>
    );
}