import React from "react";
import "./footer.css";
import Icons from "../opening page/Icons";

function Footer() {
  return (
    <div className="footer">
      {/* Top horizontal line */}
      <div className="footer-line"></div>

      <div className="footer-top">
        <div className="mid-topbar">
          <p className="topbar-name cedarville-cursive-regular">
            Samarth Khandelwal
          </p>
        </div>

        <div className="footer-icons">
          <Icons />
        </div>
      </div>

      <div className="footer-bottom">
        Made With ❤️ by Samarth!
      </div>
    </div>
  );
}

export default Footer;
