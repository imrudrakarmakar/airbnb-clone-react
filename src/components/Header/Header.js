import React, { useState } from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';
// import logo from "./airbnblogo.png"; if image in src folder
import { Link } from "react-router-dom";

function Header() {
    const [showPlaceholder, setShowPlaceholder] = useState(true);

    return (
        <div className="header">
            <Link to="/" >
                <img
                    className="header__icon"
                    // src={logo}
                    src={process.env.PUBLIC_URL + "../images/airbnblogo.png"} //image in public foldeer
                    alt="airbnb-logo"
                />
            </Link>
            
        <div className="header__center">
            <input 
                onClick={() => setShowPlaceholder(!showPlaceholder)}
                type="text" 
                placeholder={showPlaceholder ? "Start your search" : "Where are you going?" }
            />
            <SearchIcon />
        </div>

        <div className="header__right">
            <p>Become a host</p>
            <LanguageIcon />
            <ExpandMoreIcon />
            <Avatar />
        </div>
        </div>
    )
}

export default Header;
