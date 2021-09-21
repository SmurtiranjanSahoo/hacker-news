import React from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="navbar-container">
      <div className="navbar-primary">
        <Link to="/" className="navbar-logo">
          <img src="https://news.ycombinator.com/y18.gif" alt="" />
        </Link>
        <span className="navbar-primary-span">
          <Link to="/" className="navbar-title">
            Hacker News
          </Link>
          <span className="navbar-primary-span-1">
            <Link to="/new">
              <span
                style={{
                  color: pathname === "/new" ? "#ffffff" : "000000",
                }}
              >
                new
              </span>{" "}
              |{" "}
            </Link>
            <Link to="/past">
              <span
                style={{
                  color: pathname === "/past" ? "#ffffff" : "000000",
                }}
              >
                past
              </span>{" "}
              |{" "}
            </Link>
            <Link to="/comments">
              <span
                style={{
                  color: pathname === "/comments" ? "#ffffff" : "000000",
                }}
              >
                comments
              </span>{" "}
              |{" "}
            </Link>
            <Link to="/ask">
              <span
                style={{
                  color: pathname === "/ask" ? "#ffffff" : "000000",
                }}
              >
                ask
              </span>{" "}
              |{" "}
            </Link>
            <Link to="/show">
              <span
                style={{
                  color: pathname === "/show" ? "#ffffff" : "000000",
                }}
              >
                show
              </span>{" "}
              |{" "}
            </Link>
            <Link to="/jobs">
              <span
                style={{
                  color: pathname === "/jobs" ? "#ffffff" : "000000",
                }}
              >
                jobs
              </span>{" "}
              |{" "}
            </Link>
            <Link to="/submit">submit</Link>
          </span>
        </span>
      </div>
      <div className="navbar-secondary">
        <Link to="/login">login</Link>
      </div>
    </div>
  );
};

export default Navbar;
