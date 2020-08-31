import React from "react"

function CoopBox(props) {

    return (
        <div
            style={{
                backgroundImage: `url(${props.image})`,
                backgroundColor: `${props.color}`
            }}
            className="projectBox"
        >
            <a className="button" target="_blank" href={props.link}>
                {props.name}
            </a>
        </div >
    )
}

export default CoopBox