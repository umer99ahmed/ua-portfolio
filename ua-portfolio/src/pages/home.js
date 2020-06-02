import React from "react"
import { Link } from 'react-router-dom'
import "./home.css"
function Home() {


    return (
        <div className="homebox">

            <div className="intro">
                <h1>UMER AHMED</h1>
                <h3>-CS PORTFOLIO-</h3>
            </div>

            <div className="links">
                <Link to="/projects">
                    <h1>Projects</h1>
                </Link>
                <Link to="/coop">
                    <h1>Coop Workterms</h1>
                </Link>
                <Link to="/contact">
                    <h1>Contact</h1>
                </Link>
            </div >
        </div>
    )
}

export default Home