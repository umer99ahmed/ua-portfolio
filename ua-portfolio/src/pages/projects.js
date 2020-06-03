import React from "react"
import ProjectBox from "../components/ProjectBox"
import "./sections.css"
import SortingAlgo from "../media/sortingAlgo.PNG"

function Projects() {

    return (
        <div className='sectionContainer'>
            <ProjectBox name="Sorting Algorithm Visualizer" image={SortingAlgo} link="https://uahmed23.github.io/sorting-algorithm-visualizer/#/" />
        </div>
    )
}

export default Projects