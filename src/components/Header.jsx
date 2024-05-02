import React from 'react';
import '../style/header.css'; // 
import SearchIcon from '../images/noun-search-6830389.svg';
import BellIcon from '../images/noun-bell-6752348.svg'

const Header = () => {
    return (
        <div className="header">
            <a href="/">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
                    alt="Netflix Logo" 
                    className="logo"
                />
            </a>
            <nav>
                <ul className="nav-links">
                    <li><a href="/">Accueil</a></li>
                    <li><a href="series">Séries</a></li>
                    <li><a href="films">Films</a></li>
                    <li><a href="notés">Films bien notés</a></li>
                    <li className="right">
                        <img src={SearchIcon} alt="Loupe Rechercher" className="icon-search"/>
                        <a href="#jeunesse" className='jeunesse-title'>Jeunesse</a>
                        <img src={BellIcon} alt="Cloche" className="icon-bell"/>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;