// import React from 'react'
// import Home from "./Content/Home";
// import Resume from "./Content/Resume";
import { Link } from "react-scroll";
import Profile from "./assets/profile.jpg";
import { MdFacebook } from "react-icons/md";
import { PiMessengerLogoFill } from "react-icons/pi";
import {
  BiLogoGmail,
  BiServer,
  BiFileBlank,
  BiUser,
  BiHomeAlt,
  BiBookContent,
  BiLogoInstagramAlt,
  BiLogoYoutube,
  BiLogoLinkedinSquare,
} from "react-icons/bi";

function Sidebar() {
  const styles = {
    fontSize: "30px",
    margin: "10px 10px 0 0",
  };

  return (
    <>
      <div className="sidebar ">
        <div className="profile">
          <div className="image">
            <img src={Profile} alt="" />
          </div>
          <div className="name">
            <h1>Sandip Shrestha</h1>
          </div>
          <div className="icons">
            <div className="fb"></div>
            <div className="fb">
              <MdFacebook style={styles} />
            </div>
            <div className="fb">
              <PiMessengerLogoFill style={styles} />
            </div>
            <div className="fb">
              <BiLogoInstagramAlt style={styles} />
            </div>
            <div className="fb">
              <BiLogoYoutube style={styles} />
            </div>
            <div className="fb">
              <BiLogoLinkedinSquare style={styles} />
            </div>
          </div>
        </div>
        <br />
        <nav>
          <li className="nav">
            <div className="icon">
              <BiHomeAlt />
            </div>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="px-3"
            >
              Home
            </Link>
          </li>
          <li className="nav">
            <div className="icon">
              <BiUser />
            </div>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="px-3"
            >
              About
            </Link>
          </li>
          <li className="nav">
            <div className="icon">
              <BiFileBlank />
            </div>
            <Link
              to="resume"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="px-3"
            >
              Resume
            </Link>
          </li>
          <li className="nav">
            <div className="icon">
              <BiBookContent />
            </div>
            <a href="" className="px-3">
              Portfolio
            </a>
          </li>
          <li className="nav">
            <div className="icon">
              <BiServer />
            </div>
            <Link
              to="project"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="px-3"
            >
              Projects
            </Link>
          </li>
          <li className="nav">
            <div className="icon">
              <BiLogoGmail />
            </div>
            <a href="" className="px-3">
              Contact
            </a>
          </li>
        </nav>

        <div className="copyright">
          &copy;Copyright 2023
          <p>Designed By Sandip Shrestha</p>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
