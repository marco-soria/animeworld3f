import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IconContext } from 'react-icons';
import logo from '../../assets/header/awlogo1.png';
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { isAuthenticated } from '../../helpers/auth';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleLinkClick = () => {
    setIsActive(false); // Cierra el menú desplegable al hacer clic en un enlace
  };

  return (
    <nav className="navbar">
      <span className="navbar-toggle" onClick={handleClick}>
        <IconContext.Provider value={{ color: '#C21292', size: '30px' }}>
          <GiHamburgerMenu />
        </IconContext.Provider>
      </span>
      <div className="divlogo">
        <img src={logo} height="50px" width="50px" alt="AnimeWorld Logo" />
        <Link to="/" className="logo" onClick={handleLinkClick}>
          AnimeWorld
        </Link>
      </div>
      <ul className={`main-nav ${isActive ? 'active' : ''}`}>
        <li>
          <Link to="/" className="nav-links" onClick={handleLinkClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/anime" className="nav-links" onClick={handleLinkClick}>
            Anime
          </Link>
        </li>
        <li>
          <Link to="/news" className="nav-links" onClick={handleLinkClick}>
            News
          </Link>
        </li>
        <li>
          <Link to="/store" className="nav-links" onClick={handleLinkClick}>
            Store
          </Link>
        </li>
        {isAuthenticated() && ( // Verifica si el usuario está autenticado
          <li>
            <Link to="/wishlist" className="nav-links" onClick={handleLinkClick}>
              <FaHeart></FaHeart>
            </Link>
          </li>
        )}
        <li>
          <Link to="/cart" className="nav-links" onClick={handleLinkClick}>
            <FaCartShopping></FaCartShopping>
          </Link>
        </li>
        
      </ul>
    </nav>
  );
};

export { Header };

