import React from 'react'

export const Navbar = () => {
    return (
        <nav className="navbar"> 
            <h1>
            <a href="index.html"><i className="fas fa-code"></i>Ghibli Magic!</a>
            </h1>
            <ul>
                <li><a href="">Movies</a></li>
                <li><a href="">Wallpapers</a></li>
                <li><a href="">Ghibli Fans</a></li>
            </ul>
        </nav>
        )
    };
        
     export default Navbar
