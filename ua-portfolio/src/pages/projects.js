import React from "react"
import ProjectBox from "../components/ProjectBox"
import "../styles/sections.css"
import SortingAlgo from "../media/sortingAlgo.png"
import ChatApp from "../media/chatapp.png"

function Projects() {

    return (
        <div className='sectionContainer'>
            <ProjectBox
                name="Sorting Algorithm Visualizer"
                image={SortingAlgo}
                about="An algorithm visualizer that displays the steps a sorting algorithm takes to find a solution."
                link="https://uahmed23.github.io/sorting-algorithm-visualizer/#/"
                tools={["ReactJS", "HTML/CSS"]}
                gitlink="https://github.com/umer99ahmed/sorting-algorithm-visualizer"
            />
            {/* <ProjectBox
                name="Chat App"
                image={ChatApp}
                about="A real-time messaging webapp that allows user to join rooms to chat with one another."
                link="https://chat-app-ua.herokuapp.com/"
                tools={["NodeJS", "ExpressJS", "Socket.io", "HTML/CSS"]}
                gitlink="https://github.com/uahmed23/chat_app"
            /> */}
        </div>
    )
}

export default Projects