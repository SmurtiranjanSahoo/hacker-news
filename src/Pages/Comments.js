import React from "react";
//components
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Comments = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <Navbar />
        <div className="news-container">
          <div className="news-no">
            <span></span>
          </div>
          <div className="news">
            <p className="news-details">
              {" "}
              Ballas 0 minutes ago | parent [–] | on: Arm AArch64 Adds Memcpy()
              Instructions
            </p>
            <a className="news-title">
              I have watched most of your videos on the subject but cannot
              recall - have you tried running an external GPU on a Nvidia
              Jetson? Perhaps that is a place to start? (or perhaps I am just
              letting my ignorance on the matter show)
            </a>
          </div>
        </div>
        <button className="more-btn">More</button>
        <Footer />
      </div>
    </div>
  );
};

export default Comments;
