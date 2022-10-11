import React, { useState } from "react";
import "../styling/navBarStyles.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import logoImg from "../images/logo-image.png";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <Link to="/">
        <img src={logoImg} className="nav-logo" alt="logo" />
      </Link>
      <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li className="last-nav-item">
          <Link
            onClick={() =>
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
              })
            }
          >
            Contact
          </Link>
        </li>
      </ul>
      <div>
        <a href="https://www.instagram.com/caffeine_lakewood/?hl=en">
          <FaInstagram size={30} style={{ color: "#fff" }} />
        </a>
      </div>
      <div className="hamburger" onClick={menuClick}>
        {isOpen ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};
