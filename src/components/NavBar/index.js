import React from "react"
import { Link } from "react-router-dom"
import './style.css'

function NavBar() {
    return (
        <div>
            <div className="navbar">
            
            <div className="container">
                
                <div className="logo">
                    <h2 className="logo-text">Ultra Profile</h2>
                </div>
                
                <input type="checkbox" id="nav" />
                <label htmlFor="nav"></label>
                
                <ul className="ul-list">
                    <li className="list-item"><Link to="/">Home</Link></li>
                    <li className="list-item"><a href="#">Work</a></li>
                    <li className="list-item"><a href="#">Portfolio</a></li>
                    <li className="list-item"><a href="#">Resume</a></li>
                    <li className="list-item"><a href="#">About</a></li>
                    <li className="list-item"><Link to="/contact">Contact</Link></li>
                </ul>
                
            </div>
            
        </div>
        
        </div>
    )
}

export default NavBar