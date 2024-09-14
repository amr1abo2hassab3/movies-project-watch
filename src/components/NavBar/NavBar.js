import React, { useState } from "react";
import imgLogo from "../../imags/Shahid_logo_light.webp";
import "./NavBar.css";
const NavBar = (prop) => {
  const [wordValue, setwordValue] = useState("");

  return (
    <nav>
      <div className="logo">
        <img src={imgLogo} alt="شاهد" />
      </div>
      <div className="inputSearch">
        <input
          type="text"
          placeholder="Serach"
          onChange={(e) => setwordValue(e.target.value)}
          onKeyUp={() => prop.fnSearch(wordValue)}
        />
      </div>
    </nav>
  );
};

export default NavBar;
