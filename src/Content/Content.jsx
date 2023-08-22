// import React from 'react'
import Accordian from "./Accordian";
import Detail from "./Detail";
import Home from "./Home";
import Me from "./Me";
import Resume from "./Resume";
import { Element } from "react-scroll";

function Content() {
  return (
    <div className="content">
      <Home />

      <Element name="about" className="element">
        <Me />
      </Element>

      <Detail />
      <Accordian />
      <Element name="resume" className="element">
        <Resume />
      </Element>
    </div>
  );
}

export default Content;
