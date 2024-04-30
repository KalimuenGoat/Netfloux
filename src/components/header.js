import React from 'react';
import '../css/header.css'; // 
import SearchIcon from '../images/noun-search-6830389.svg';

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
                    <li><a href="#home">Accueil</a></li>
                    <li><a href="#tvshows">Séries</a></li>
                    <li><a href="#movies">Films</a></li>
                    <li><a href="#new">Nouveautés les plus regardées</a></li>
                    <li><a href="#home">Ma liste</a></li>
                    <li><a href="#tvshows">Explorer par la langue</a></li>
                    <img src={SearchIcon} alt="Loupe Rechercher"/>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
