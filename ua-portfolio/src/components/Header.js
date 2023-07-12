import React from "react"
import { Link } from "react-router-dom"

function Header(props) {



    return (

        <header>

            <div className="logo">
                <Link to="/"><h2>UMER AHMED</h2></Link>
            </div>
            <div className="tabs">
                <Link to="/projects" className={props.sel === 1 ? "underline" : ""}><h2 >projects</h2></Link>
                <Link to="/coop" className={props.sel === 2 ? "underline" : ""}><h2>experience</h2></Link>
                <Link to="/contact" className={props.sel === 3 ? "underline" : ""}><h2>contact</h2></Link>
            </div>

        </header >
    )
}

export default Header