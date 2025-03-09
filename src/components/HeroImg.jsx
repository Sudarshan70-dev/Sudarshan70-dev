import React from "react";
import "./HeroImgStyle.css";
import IntroImg from "../assets/Avatar.webp";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import SendIcon from '@mui/icons-material/Send';
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Container } from "@mui/system";


const HeroImg = () => {


  const goOnContact=()=>{
    const element = document.getElementById("contact");
    window.scrollTo({top:element.offsetTop , behavior:"smooth"});
  }



  return (
    <div className="centerDiv">
      <Container
        sx={{
          width: "90%",
          margin: "8rem 0",
          borderRadius: "22px",
          backgroundColor: "rgb(241 241 241)",
        }}
      >
        <div className="paddingLeftRight">
          <div className="hero">
            <div className="intro-heading">
              <div>Hi! I'm Sudarshan Gadekar</div>
              <div className="typing-container">Web Developer</div>
            </div>
            <div className="intro-img centerDiv">
              <img src={IntroImg} alt="Intro" />
            </div>
          </div>

          <button type="button" className="button centerDiv" onClick={goOnContact}>Contact Me</button>

          <div className="centerDiv">
            <div>
              <div className="heading centerDiv" id="about">
                About me
              </div>
              <p className="justifyContent">
                I am a passionate full-stack web developer based in Pune,
                Maharashtra with expertise in UI/UX, JavaScript, and Node.js.
                With 2 years of experience, I specialize in building dynamic and
                responsive React UI components that enhance user experiences on
                the web. I have worked extensively on modern web applications,
                integrating RESTful APIs, optimizing performance, and ensuring
                application reliability through unit and automation testing To
                ensure the quality of my work, I use various testing frameworks
                like Mocha, Appium, and Selenium.
              </p>
              <p className="justifyContent">
                I am holding a B.Tech in Computer Science & Engineering from
                Hi-Tech Institute of Technology, Chatrapati Sambhaji Nagar
                (Aurangabad, Maharashtra), Now, as a full-stack developer, I
                specialize in building scalable and responsive applications
                using React, Firebase, and Google Cloud Platform. My experience
                in creating secure Firebase cloud functions and APIs I have a
                strong foundation in frontend and backend development. I
                continuously explore new technologies to stay ahead in the
                ever-evolving web landscape.
              </p>
              <p className="justifyContent">
                If you're looking for a full-stack developer who is passionate
                about building impactful projects for the web and mobile, please
                don't hesitate to get in touch. Let's work together to bring
                your ideas to life!
              </p>
            </div>
          </div>

          <div>
            <div className="heading centerDiv" id="work">
              Experience
            </div>
            <div className="centerDiv">
              <div className="workIcon centerDiv">
                <WorkOutlineOutlinedIcon sx={{ color: "blue" }} />
              </div>
              <Container
                sx={{
                  width: "90%",
                  backgroundColor: "#ffffff",
                  borderRadius: "16px",
                }}
              >
                <div className="companyName">Vendekin Technology Pvt Ltd</div>
                <div className="positionName">
                  Web Developer | December 2022 - September 2024
                </div>
                <div className="jobDiscreption">
                  <ul>
                    <li>
                      <p className="justifyContent">
                        As the organization's vending machine management
                        platform provides a comprehensive solution, many
                        companies in the vending industry seek to integrate with
                        our system. I am responsible for managing these
                        integrations, ensuring seamless functionality for
                        onboarding vending machines onto our platform while
                        enabling real-time payment processing and inventory
                        management.
                      </p>
                    </li>
                    <li>
                      <p className="justifyContent">
                        I develop and maintain the vending machine planogram,
                        where all administrative operations for vending
                        operators are performed, including product stocking,
                        refilling, quantity management, and detailed product
                        information, ensuring a better UI and user experience.
                      </p>
                    </li>
                    <li>
                      <p className="justifyContent">
                        In addition to development, I actively identify and
                        resolve bugs in both the web and Android applications,
                        working across both frontend and backend systems.
                      </p>
                    </li>
                    <li>
                      <p className="justifyContent">
                        Beyond my development work, I am also responsible for
                        automation testing, utilizing Selenium for frontend
                        testing and Mocha for backend testing to ensure the
                        reliability and efficiency of our platform.
                      </p>
                    </li>
                    <li>
                      <p className="justifyContent">
                        Skill : ReactJs, JavaScript ES6, Typescript, Firebase,
                        Firestore, Google Cloud Platform, Selenium, Mocha, Git
                      </p>
                    </li>
                  </ul>
                </div>
              </Container>
            </div>
          </div>

          <div id="contact">
            <div className="heading centerDiv">Get in touch</div>

            <Container
              sx={{
                width: "80%",
              }}
            >
              <div>
                <div className="inputField">
                  <EmailOutlinedIcon />
                  <input
                    type="email"
                    name="Email"
                    id="emailId"
                    placeholder="Email"
                    className="customInput"
                  />
                </div>
                <div className="inputField">
                  <PersonOutlineIcon />
                  <input
                    type="text"
                    name="Name"
                    id="name"
                    placeholder="Name"
                    className="customInput"
                  />
                </div>
                <div
                  className="inputField inputFieldMessage"
                >
                  <ChatBubbleOutlineIcon />
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Write message"
                    className="customInput customInputMessage"
                  ></textarea>
                </div>
                <div>
                 
                  <button type="submit" className="button centerDiv">
                    Send
                    <SendIcon sx={{paddingLeft:"10px", color:"inherit",}}/>
                    </button>
                </div>

                <div className="contactInfo centerDiv">
                  <div>
                    <a href="mailto:sudarshangadekar222@gmail.com">
                      <MailIcon /> sudarshangadekar222@gmail.com
                    </a>
                  </div>
                  <div>
                    <a href="tel:+917083589566">
                      <LocalPhoneIcon />
                      +91 7083589566
                    </a>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroImg;
