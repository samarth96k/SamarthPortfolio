import React from "react";

function Icons(){
    return (
        <>
            <div>  <a
            href="https://www.linkedin.com/in/samarth-khandelwal-bba65228a"
            target="_blank"
            rel="noopener noreferrer"
          ><img className="github" src="linkedin.svg" alt="" /></a></div>
          <div><a
            href="https://leetcode.com/u/re9l7O1TpJ/"
            target="_blank"
            rel="noopener noreferrer"
          ><img className="github" src="leetcode.svg" alt="" /></a></div>
          <div ><a
            href="https://github.com/samarth96k"
            target="_blank"
            rel="noopener noreferrer"
          ><img className="github" src="github.svg" alt="" /></a></div>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=samarthkhandelwal880@gmail.com&body=Hey%20Samarth"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="github" src="mail.svg" alt="Email Samarth" />
          </a>
          <div><a
            href="https://www.instagram.com/samarth9_6/"
            target="_blank"
            rel="noopener noreferrer"
          ><img className="github" src="instagram.svg" alt="" /></a></div>
          <div><a
            href="https://wa.me/919773959744?text=Hey%20Samarth"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="github" src="whatsapp.svg" alt="WhatsApp Samarth" />
          </a></div>
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button-top-bar"
          >
            Resume
            <img className="resume-icon" src="Download.png" alt="Download Resume" />
          </a>
        </>
    )
}

export default Icons;