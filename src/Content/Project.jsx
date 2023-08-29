// import React from 'react'
// import Profile from "../assets/profile.jpg";
import { Link } from "react-scroll";
import web from "../assets/web.png";
import green from "../assets/green.png";
import "../style.scss";

function Project() {
  return (
    <>
      <div className="project row">
        <h1>Projects</h1>
        <Link to="home" className="top mx-2 btn">
          Back To Top
        </Link>
        <div className="card col-lg-6 m-5">
          <a
            href="https://shresthasandip.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card-image">
              <img src={web} alt="" />
            </div>
            <div className="card-title py-3">
              <h2>Web Commerce</h2>
            </div>
          </a>
        </div>
        <div className="card col-lg-6 m-5">
          <a
            href="https://gogreen-ngo.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card-image">
              <img src={green} alt="" />
            </div>
            <div className="card-title py-3">
              <h2>NGO</h2>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Project;
