// import React from 'react'
// import Profile from "../assets/profile.jpg";
import { Link } from "react-scroll";
import web from "../assets/web.png";
import "../style.scss";

function Project() {
  return (
    <>
      <div className="project">
        <h1>Projects</h1>
        <Link to="home" className="top mx-2 btn">
          Back To Top
        </Link>
        <a href="https://shresthasandip.netlify.app/">
          <div className="card m-5">
            <div className="card-image">
              <img src={web} alt="" />
            </div>
            <div className="card-title py-3">
              <h2>Web Commerce</h2>
            </div>
          </div>
        </a>
        {/* <div className="card">
          <div className="card-image"></div>
          <div className="card-title"></div>
        </div> */}
      </div>
    </>
  );
}

export default Project;
