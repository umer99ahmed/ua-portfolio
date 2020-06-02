import React from "react"
import { Link } from "react-router-dom"
function Header() {
    return (
        <header>
            <Link to="/"><h2>Umer Ahmed</h2></Link>
            <Link to="/projects"><h2>projects</h2></Link>
            <Link to="/coop"><h2>coop</h2></Link>
            <Link to="/contact"><h2>contact</h2></Link>

        </header >
    )
}

export default Header