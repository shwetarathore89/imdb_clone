import React from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar">
             <div className="navbarLeft">
            <span> MovieFlix</span>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Trending</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
            </div>
        </div>
    )
}

export default Navbar

   
