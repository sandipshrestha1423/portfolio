// import React from 'react'
import Accordian from "./Accordian";
import Detail from "./Detail";
import Home from "./Home";
import Resume from "./Resume";
import Text from "./Text";

function Content() {
  return (
    <>
      <div className="content">
        <Home />
        <Text />
        <Detail />
        <Accordian />
        <Resume />
      </div>
    </>
  );
}

export default Content;
