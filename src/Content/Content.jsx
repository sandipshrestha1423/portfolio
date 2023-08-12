// import React from 'react'
import Accordian from "./Accordian";
import Detail from "./Detail";
import Home from "./Home";
import Text from "./Text";

function Content() {
  return (
    <>
      <div className="content">
        <Home />

        <Text />
        <Detail />
        <Accordian />
      </div>
    </>
  );
}

export default Content;
