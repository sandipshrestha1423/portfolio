// import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content/Content";
function All() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="app">
        <Sidebar />

        <Content />
      </div>
    </>
  );
}

export default All;
