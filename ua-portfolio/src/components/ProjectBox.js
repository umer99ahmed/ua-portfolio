import React from "react"

function ProjectBox(props) {

    return (
        <div
            style={{
                backgroundImage: `url(${props.image})`
            }}
            className="projectBox"
        >
            {/* <img src={props.image}></img> */}
            < button > {props.name}</button >
        </div >
    )
}

export default ProjectBox

/* background-image: url(../media/sortingAlgo.PNG); */
