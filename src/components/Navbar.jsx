import "./NavbarStyle.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Logo from "../assets/Logo.webp"


const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={Logo} alt="Logo" />
        {/* <h1 className="headerColor">Sudarshan Gadekar</h1> */}
      </Link>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">
            <IconButton>
              <HomeIcon />
            </IconButton>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            <IconButton>
              <PersonIcon />
            </IconButton>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <IconButton>
              <ContactMailIcon />
            </IconButton>
            Contact
          </Link>
        </li>
      </ul>

      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#ffffff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#ffffff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
