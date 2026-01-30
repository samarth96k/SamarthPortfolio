import React from "react";
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
      {/* RIGHT INTRO TEXT */}
      <div className="opening-right fade-in">
        <h1 className="typing-text">
          <span className="line line1 Agaleoz" style={{ fontFamily: 'Aquire' }}>Hi,</span>
          <br />
          <span className="line line2 Satoshi-Medium" style={{ fontFamily: 'Aquire-Bold' }}>I'm Samarth Khandelwal.</span>
        </h1>
        <h2 className="typing-subtext " style={{ fontFamily: 'Aquire' }}>Full Stack Developer | Software Engineer</h2>
        <button style={{ fontFamily: 'Aquire-Light'}}
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