import React from "react"

function ProjectBox(props) {

    return (
        <div
            style={{
                backgroundImage: `url(${props.image})`,
                backgroundColor: `${props.color}`
            }}
            className="projectBox"
        >
            <a className="button" target="_blank" href={props.link}>
                {/* < button > */}
                {props.name}
                {/* </button > */}
            </a>
        </div >
    )
}

export default ProjectBox

/* background-image: url(../media/sortingAlgo.PNG); */
