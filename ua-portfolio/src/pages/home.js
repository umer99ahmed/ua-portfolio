import React from "react"
import { Link } from 'react-router-dom'
import Typist from "react-typist";
import FadeInSection from "../components/FadeInSection";
import FractalTree from "../components/FractalTree";
import { Sidenav } from "rsuite";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/home.css"
import "../styles/SidebarNav.css"
import "react-typist/dist/Typist.css";

function Home() {
    const links = [
                    <Link to="/experience">
                        <h1>Experience</h1>
                    </Link>,
                    <Link to="/projects">
                        <h1>Projects</h1>
                    </Link>,
                    <div className="sidebar-logos" href="/">
                    <a href="mailto:umer99ahmed@gmail.com" target="_blank">
                        <EmailRoundedIcon style={{ padding: 5, fontSize: 23 }}></EmailRoundedIcon>
                    </a>
                    <a href="https://github.com/umer99ahmed" target="_blank">
                        <GitHubIcon style={{ padding: 5, fontSize: 22 }}></GitHubIcon>
                    </a>
                    <a href="https://www.linkedin.com/in/umer-ahmed/" target="_blank">
                        <LinkedInIcon style={{ padding: 5,fontSize: 24 }}></LinkedInIcon>
                    </a>
                    </div>
                ]
    return (
        <div className="homebox">
            <div className="intro">
            <FractalTree></FractalTree>
            <Typist avgTypingDelay={120}>
                <span className="intro-title">
                    {"Hi, I am "}
                    <span className="intro-name">{"Umer"}</span>
                    {"."}
                </span>
            </Typist>
            <FadeInSection>
            <div className="intro-desc">
                a software engineer who likes building cool stuff with code.
                I have an interest in full-stack development, artificial intelligence,
                design, and everything in between.
            </div>
            </FadeInSection>
            {/* <a
                href="mailto:gazi.jarin@mail.utoronto.ca"
                className="intro-contact"
            >
                <EmailRoundedIcon></EmailRoundedIcon>
                {"  " + "Say hi!"}
            </a> */}

            </div>

                <div className="links">
                    {links.map((link, i) => (
                    <FadeInSection delay={`${i + 1}00ms`}>
                        <div>{link}</div>
                    </FadeInSection>
                    ))}
                    
                </div >

        </div>
    )
}

export default Home