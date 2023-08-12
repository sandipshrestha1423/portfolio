// import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Content from "./Content/Content";
// import Detail from "./Content/Detail";
import Sidebar from "./Sidebar";
function All() {
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
