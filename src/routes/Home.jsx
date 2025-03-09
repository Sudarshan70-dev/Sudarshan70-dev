import React from 'react'
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import OtherProfiles from "../components/OtherProfiles";

const Home = ()=>{
    return(
    <div style={{height:"100%", width:"100%"}}>
        <Navbar/>
        <HeroImg/>
        <OtherProfiles/>
    </div>
    )
}

export default Home;