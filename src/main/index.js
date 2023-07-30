import './assets/css/style.css';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from 'react-router-dom';

function Navbar() {
    return (
<nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div class="container">
            <a class="navbar-brand" href="/">X-7</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="index.html"><i class="bi bi-house-door-fill"></i> Home </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about"><i class="bi bi-person-circle"></i> About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact-person"><i class="bi bi-telephone"></i> Contact</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle bi bi-command" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Other
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li>
                                    <a href='/about' class="dropdown-item bi bi-images">
                                        Jadwal
                                    </a>
                                </li>
                                <li><a class="dropdown-item bi bi-images" href="https://www.softwareseni.co.id/blog/react-js"> Gallery</a></li>
                            </ul>
                        </li>
                </ul>
            </div>
            </div>
    </nav>

        
    )
}
export default Navbar;