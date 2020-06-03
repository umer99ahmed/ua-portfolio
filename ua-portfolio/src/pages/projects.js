import React from "react"
import ProjectBox from "../components/ProjectBox"
import "./sections.css"
import SortingAlgo from "../media/sortingAlgo.PNG"

function Projects() {

    return (
        <div className='sectionContainer'>

            <ProjectBox name="Sorting Algorithm Visualizer" image={SortingAlgo} />
            <ProjectBox />
            <ProjectBox />
            <ProjectBox />
            <ProjectBox />

        </div>
    )
}

export default Projects