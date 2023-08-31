import React from "react";
import "../components/Navbar.css";

function Navbar() {
  return (
    <header className="nav">
      <div className="nav_logo">
        <img src="./assets/logo.png" alt="" />
      </div>
      <ul className="nav-links">
        <li>
          <a href="#">Movies</a>
        </li>
        <li>
          <a href="#">Top 20</a>
        </li>
        <li>
          <a href="#">Gender</a>
        </li>
      </ul>
      <div className="search">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
    </header>
  );
}

export default Navbar;
