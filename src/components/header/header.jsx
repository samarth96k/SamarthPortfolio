import React from "react";
import Tab from "./tabs";
import "./header.css";


function Header(){
    return (
    <div className="header">
        <Tab name="Home" />
        <Tab name="Projects"/>
        <Tab name="Skills" />
        <Tab name="About" />
        <Tab name="Education" />
        <Tab name="Resume"> </Tab >
    </div>
    )
}

export default Header;