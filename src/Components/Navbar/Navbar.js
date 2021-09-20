import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-primary">
        <span className="navbar-logo">
          <img src="https://news.ycombinator.com/y18.gif" alt="" />
        </span>
        <span className="navbar-primary-span">
          <span className="navbar-title">Hacker News</span>
          <span>new | </span>
          <span>past | </span>
          <span>comments | </span>
          <span>ask | </span>
          <span>show | </span>
          <span>jobs | </span>
          <span>submit</span>
        </span>
      </div>
      <div className="navbar-secondary">
        <p>login</p>
      </div>
    </div>
  );
};

export default Navbar;
