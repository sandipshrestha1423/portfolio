// import React from 'react'
import Accordian from "./Accordian";
import Detail from "./Detail";
import Home from "./Home";
import Me from "./Me";
import Resume from "./Resume";

function Content() {
  return (
    <>
      <div className="content">
        <Home />
        <Me />
        <Detail />
        <Accordian />
        <Resume />
      </div>
    </>
  );
}

export default Content;
