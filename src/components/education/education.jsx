import React from "react";
import Card from '@mui/material/Card';
import EdCard from "./EdCard";
// import CardContent from '@mui/material/CardContent';
import "./education.css"
function EdLogo(){
    return 
}

export default function Education(){
    return (
    <div className="Education">
    <EdCard
        inst_name="VIT Bhopal University"
        degree_name="Computer Science and Engineering"
        board="Bachelor in Technology"
        cgpa="9.46"
        // percantage="87%"
        start="2023"
        end="2027"
        inst_img="VitBhopalImage2.png"
        img_setting="small"
        img_type = "large"
    />
    <EdCard
        inst_name="Adarsh World School"
        board="Central Board Of Secondary Education"
        degree_name="Senior Secondary Examination (Class XII)"
        // cgpa="8.7"
        percantage="93.5"
        start="2023"
        // end="2027"
        inst_img="CBSE_new_logo.svg.png"
        // inst_img=
        img_type = "small"
    />
    <EdCard
        inst_name="Adarsh World School"
        board="Central Board Of Secondary Education"
        degree_name="Secondary Examination (Class X)"
        // cgpa="8.7"
        percantage="97.4"
        start="2021"
        // end="2027"
        inst_img="CBSE_new_logo.svg.png"
        img_type = "small"
    />
    </div>
    )
}