import { useEffect } from "react";
// import bootstrap from "bootstrap";
// import Home from "./Content/Home";
// import Resume from "./Content/Resume";
import { Link } from "react-scroll";
import Profile from "./assets/profile.jpg";
import { MdFacebook } from "react-icons/md";
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
  BiLogoGithub,
} from "react-icons/bi";

function Sidebar() {
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      // eslint-disable-next-line no-undef
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);
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
            <div className="fb">
              <a
                href="https://www.facebook.com/sandip.shrestha.927758"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <MdFacebook style={styles} />
              </a>
            </div>
            <div className="fb">
              <a
                href="https://www.instagram.com/sandipshrest/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <BiLogoInstagramAlt style={styles} />
              </a>
            </div>
            <div className="fb">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                data-bs-title="Currently Unavailable"
              >
                <BiLogoGithub style={styles} />
              </a>
            </div>
            <div className="fb">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                data-bs-title="Currently Unavailable"
              >
                <BiLogoYoutube style={styles} />
              </a>
            </div>
            <div className="fb">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                data-bs-title="Currently Unavailable"
              >
                {" "}
                <BiLogoLinkedinSquare style={styles} />
              </a>
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
