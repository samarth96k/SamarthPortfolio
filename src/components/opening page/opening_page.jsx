import React from "react";
import Welcome from "./Welcome";
import DescAboutMe from "./DescAboutMe";
import SizeAvatars from "./PicOfMe";
import "./opening_page2.css";
import Icons from "./Icons";
export default function Opening_page() {
  return (
    <div className="opening-wrapper">

      {/* TOP BAR */}
      <div className="opening-top">
        <div className="mid-topbar"><p className="topbar-name cedarville-cursive-regular">Samarth Khandelwal</p></div>
        <div className="right-topbar">
          <Icons />
        </div>
      </div>

      {/* LEFT IMAGE */}
      {/* <div className="opening-left">

        <img
          src="/IMG-20231210-WA0024.jpg"
          className="opening-image"
          alt="Samarth"
          style={{ width: "300px", borderRadius: "50%", height: "300px" }}
        />

      </div> */}

      {/* RIGHT INTRO TEXT */}
      <div className="opening-right fade-in">
        <h1 className="typing-text">
          <span className="line line1">Hi,</span>
          <br />
          <span className="line line2">I'm Samarth Khandelwal.</span>
        </h1>
        <h2 className="typing-subtext">Full Stack Developer | Software Engineer</h2>
        <button
          className="view-work-button"
          onClick={() => {
            const element = document.querySelector(".projects-container");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          View My Work
        </button>
      </div>

      {/* SCROLL INDICATOR */}
      <div
        className="opening-bottom fade-in-delay"
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        ⌄
      </div>

    </div>


  );
}
