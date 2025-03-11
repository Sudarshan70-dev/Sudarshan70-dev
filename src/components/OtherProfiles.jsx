import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import "./HeroImgStyle.css";
import "../style/HeroImgStyle.css";


const OtherProfiles = () =>{
return(
    <div className="otherProfiles">
        <div className="contactIcons centerDiv">
          <a
            href="https://www.linkedin.com/in/sudarshan-gadekar-21715b256/"
            target="_blank"
          >
            <LinkedInIcon color="primary" fontSize="large"/>
          </a>
        </div>
        <div className="contactIcons centerDiv">
          <a
            href="https://www.instagram.com/er.sudarshan.gadekar.904?igsh=ejRxcm1vM2wzcHd4"
            target="_blank"
          >
            <InstagramIcon  color="primary" fontSize="large"/>
          </a>
        </div>
        <div className="contactIcons centerDiv">
          <a href="https://www.github.com/Sudarshan70-dev" target="_blank">
            <GitHubIcon  color="primary" fontSize="large"/>
          </a>
        </div>
      </div>
)
}

export default OtherProfiles;