import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-text">
        Guidelines | FAQ | Lists | API | Security | Legal | Apply to YC |
        Contact
      </div>
      <div className="footer-search">
        <p>Search:</p>
        <input type="text" />
      </div>
    </div>
  );
};

export default Footer;
