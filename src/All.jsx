// import React from "react";
import { useState } from "react";
import Content from "./Content/Content";
// import Detail from "./Content/Detail";
import Sidebar from "./Sidebar";
function All() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className={`app ${menuOpen ? "menu-open" : ""}`}>
        <Sidebar open={menuOpen} />
        <div className="app">
          <Sidebar />
          <Sidebar />
          <Content />
        </div>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          Menu
        </button>
      </div>
    </>
  );
}

export default All;
