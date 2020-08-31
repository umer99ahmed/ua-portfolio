import React from "react"
import "./sections.css"
import ProjectBox from "../components/CoopBox"
import CCSpic from "../media/CCSpic.png"
import CoopBox from "../components/CoopBox"


function Coop() {

    return (
        <div className='sectionContainer'>
            <CoopBox name="CCS STUDENT IT CONSULTANT" image={CCSpic} link="https://uahmed23.github.io/ccs-workterm-report/" color="#1E90FF" />
        </div>
    )
}

export default Coop