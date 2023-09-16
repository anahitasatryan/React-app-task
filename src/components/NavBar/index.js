import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Navbar = () => {
  return (
    <nav >
      <ul id="menu">
        <li>
          <Link to="/home">HOME</Link>|
        </li>
        <li>
          <Link to="/asteroids">NEARBY ASTEROIDS</Link>|
        </li>
        <li>
          <Link to="/astronomy">ASTRONOMY PICTURE OF THE DAY </Link>|
        </li>
        <li>
          <Link to="/planet">SUBMIT NEW PLANET</Link>
          |
        </li>
      </ul>
      <ul className="lang-bar">
        <li>
          <a href="/ ">EN</a>|
        </li>
        <li>
          <a href="/">РУ</a>|
        </li>
        <li>
          <a href="/">ՀՅ</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
