import React from "react";
import "../styling/navBarStyles.css";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import logoImg from "../images/logo-image.png";

export const NavBar = () => {
  return (
    <div className="header">
      <Link to="/">
        {/* <h1 className="nav-logo">Caffeine Lakewood</h1> */}
        <img src={logoImg} className="nav-logo" alt="logo" />
      </Link>
      <ul className="nav-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li className="last-nav-item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div>
        <FaInstagram size={30} style={{ color: "#fff" }} />
      </div>
    </div>
  );
};
