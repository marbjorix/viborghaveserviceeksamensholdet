

import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        // For at få hvid tekst data-bs-theme="dark" - tjek doc - de er gået væk fra det med bg-dark
        <nav className="navbar navbar-expand-lg  bg-opacity-10" data-bs-theme="dark">
            <div className="container">
                <Link className="navbar-brand" to="#">Viborg Haveservice</Link>
                <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto text-white">
                        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                        <a className="nav-link" href="/#ydelser">Ydelser</a>
                        <a className="nav-link" href="/#galleri">Galleri</a>
                        <a className="nav-link" href="/#about">Om os</a>
                        <a className="nav-link" href="/#contact">Kontakt</a>
                        <NavLink className="nav-link" to="/extra1">Ekstra 1</NavLink>
                        <NavLink className="nav-link" to="/extra2">Ekstra 2</NavLink>
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar