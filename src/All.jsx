// import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Content from "./Content/Content";
// import Detail from "./Content/Detail";
import Sidebar from "./Sidebar";
function All() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Router>
        <div className="app">
          <Sidebar />

          <Content />
        </div>
      </Router>
    </>
  );
}

export default All;
