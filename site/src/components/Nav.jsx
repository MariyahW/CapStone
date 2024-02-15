import React from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div className="nav-bar">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/contact">
        <div>Contact Me</div>
      </Link>
      <Link to="/resume">
        <div>Resume</div>
      </Link>
      <Link to="/blog">
        <div>Exclusively Mariyah </div>
      </Link>

        
      </div>
    </>
  );
}
