import React, { useState } from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = ()=>{

    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [message, setMessage] = useState("");


    const onChangeMessage =(event)=>{
        setMessage(event.target.value)
    }
    const onChangeEmail =(event)=>{
        setEmail(event.target.value)
    }
    const onChangeContact =(event)=>{
        setPhoneNo(event.target.value)
    }


    return(
        <div>
            <div>Get in touch</div>

            <div className="textfield">
            <input
            id="email"
            type = "text"
            placeholder = "Email"
            value ={email}
            onChange = {onChangeEmail}

            />
            </div>
            <div className="textfield">
            <input
            id="contact-no"
            type = "number"
            placeholder = "Contact No"
            value = {phoneNo}
            onChange = {onChangeContact}

            />
            </div>
            <div className="textfield">
            <input
            id="message"
            type = "text"
            placeholder = "Write your message"
            value = {message}
            onChange = {onChangeMessage}
            />
            </div>


            <div>
                <button
                id="send message"
                
                >Send</button>
            </div>

           

        </div>
    )
}

export default Contact;