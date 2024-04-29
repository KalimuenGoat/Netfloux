import React from 'react';
// import './Header.css'; // 

const Header = () => {
    return (
        <div className="header">
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
                alt="Netflix Logo" 
                className="logo"
            />
            <nav>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#tvshows">TV Shows</a></li>
                    <li><a href="#movies">Movies</a></li>
                    <li><a href="#new">New & Popular</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
