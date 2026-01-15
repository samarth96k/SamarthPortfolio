import React from "react";
import "./about.css";
const title = "About Me";
const desc = "Hello there! I’m Samarth, a third-year B.Tech student at VIT, pursuing Computer Science and Engineering. I enjoy exploring new technologies, building projects, and learning by doing. I love collaborating with new people and working on ideas that challenge me and help me grow. This portfolio is a small showcase of my journey, skills, and the projects I’ve worked on so far. I like to read books of different genres and explore about space! How facinating it is to watch to a universe which is evolving forever and is limitless just like human potentiel! Hope you enjoy exploring my work!";

function About(){
    return(
        <div className="about-div">
            <div className="about-left">
                <div className="about-pic"><img src="IMG-20231210-WA0024.jpg" alt="" className="about-pic-tag"/></div>
            </div>
            <div className="about-right">
                <div className="about-title"><h1>{title}</h1></div>
                <div className="about-desc">{desc}</div>
            </div>
        </div>
    );
}

export default About;