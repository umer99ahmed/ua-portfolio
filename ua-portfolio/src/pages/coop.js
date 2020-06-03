import React from "react"
import "./sections.css"
import ProjectBox from "../components/ProjectBox"
import CCSpic from "../media/CCSpic.png"


function Coop() {

    return (
        <div className='sectionContainer'>
            <ProjectBox name="CCS IT CONSULTANT" image={CCSpic} link="https://uahmed23.github.io/ccs-workterm-report/" color="#1E90FF" />
        </div>
    )
}

export default Coop