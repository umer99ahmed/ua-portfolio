import React from "react"
import GitHubIcon from "@material-ui/icons/GitHub";

function ProjectBox(props) {

    const tools = props.tools.map((element, index) => {
        return (
            <div key={index} className="tool">
                <h4>{element}</h4>
            </div>)
    })


    return (
        <>
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
            <div className='projectAbout'>
                <p> {props.about}</p>
            </div>
            <div className="projectInfo">
                {tools}
                <div className="gitlink">

                    <a href={props.gitlink} target="_blank">
                        <GitHubIcon style={{ padding: 5,fontSize: 24 }}></GitHubIcon>
                    </a>
                </div>

            </div>
        </>

    )
}

export default ProjectBox

/* background-image: url(../media/sortingAlgo.PNG); */
