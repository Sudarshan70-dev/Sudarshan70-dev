import "../style/HeroImgStyle.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.webp"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";


const Navbar = () => {
  const [aboutClick, setAboutClick] = useState(true);
  const [experienceClick, setExperienceClick] = useState(false);
  const [contactClick, setContactClick] = useState(false);


  const goOnAbout = ()=>{
    setAboutClick(true);
    setExperienceClick(false);
    setContactClick(false);
    const element = document.getElementById("about");
      window.scrollTo({top:element.offsetTop , behavior:"smooth"});
  }
  
  const goOnExperience = ()=>{
    setAboutClick(false);
    setExperienceClick(true);
    setContactClick(false);
    const element = document.getElementById("work");
    window.scrollTo({top:element.offsetTop , behavior:"smooth"});
  }

  const goOnContact=()=>{
    setAboutClick(false);
    setExperienceClick(false);
    setContactClick(true);
    const element = document.getElementById("contact");
    window.scrollTo({top:element.offsetTop , behavior:"smooth"});
  }


  const goOnIntro =()=>{
    const element = document.getElementById("mainPage");
    window.scrollTo({top:element.offsetTop, behavior:"smooth"});
  }


  return (
    <div className="header">
      <div>
        <button className="logo" onClick={()=>goOnIntro()}>
        <img className="logo" src={Logo} alt="Logo" />
        </button>
      </div>
      <div className="menu">
        <button
          onClick={() => goOnAbout()}
          className={aboutClick ? "flex items-center gap-2 p-2 bg-blue-600 text-white rounded-lg shadow-md transition-all duration-300 hover:bg-blue-700 menuButton centerDiv menuClick" :"flex items-center gap-2 p-2 bg-blue-600 text-white rounded-lg shadow-md transition-all duration-300 hover:bg-blue-700 menuButton centerDiv"}
        >
          <PersonOutlineIcon size={24} />
          {aboutClick && (
            <span className="transition-opacity duration-300">About</span>
          )}
        </button>
        <button
          onClick={() => goOnExperience()}
          className={experienceClick ? "flex items-center gap-2 p-2 bg-blue-600 text-white rounded-lg shadow-md transition-all duration-300 hover:bg-blue-700 menuButton centerDiv menuClick" :"flex items-center gap-2 p-2 bg-blue-600 text-white rounded-lg shadow-md transition-all duration-300 hover:bg-blue-700 menuButton centerDiv"}        >
          <WorkOutlineOutlinedIcon size={24} />
          {experienceClick && (
            <span className="transition-opacity duration-300">Experience</span>
          )}
        </button>
        <button
          onClick={() => goOnContact()}
          className={contactClick ? "flex items-center gap-2 p-2 bg-blue-600 text-white rounded-lg shadow-md transition-all duration-300 hover:bg-blue-700 menuButton centerDiv menuClick" :"flex items-center gap-2 p-2 bg-blue-600 text-white rounded-lg shadow-md transition-all duration-300 hover:bg-blue-700 menuButton centerDiv"}        >
          <EmailOutlinedIcon size={24} />
          {contactClick && (
            <span className="transition-opacity duration-300">Contact</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
