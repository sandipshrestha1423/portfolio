// import React from 'react'
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
      <div className={`sidebar ${open ? "open" : ""}`}>
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
              Home
            </li>
            <li className="nav">
              <div className="icon">
                <BiUser />
              </div>
              About
            </li>
            <li className="nav">
              <div className="icon">
                <BiFileBlank />
              </div>
              Resume
            </li>
            <li className="nav">
              <div className="icon">
                <BiBookContent />
              </div>
              Portfolio
            </li>
            <li className="nav">
              <div className="icon">
                <BiServer />
              </div>
              Services
            </li>
            <li className="nav">
              <div className="icon">
                <BiLogoGmail />
              </div>
              Contact
            </li>
          </nav>

          <div className="copyright">
            &copy;Copyright 2023
            <p>Designed By Sandip Shrestha</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
