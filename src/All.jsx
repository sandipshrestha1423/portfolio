// import React from "react";
import { useState } from "react";
import Content from "./Content/Content";
// import Detail from "./Content/Detail";
import Sidebar from "./Sidebar";
import FiMenu from "react-icons/fi";
function All() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div className="app">
        {/* Menu button */}
        <div className="menu-button" onClick={toggleMenu}>
          <FiMenu />
        </div>
        <Sidebar open={menuOpen} />
        <Sidebar />
        <Content />
      </div>
    </>
  );
}

export default All;
