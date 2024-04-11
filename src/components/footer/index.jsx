import React, { useState, useEffect, useContext } from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom'
import './Footer.css'; // Importa el archivo de estilos local
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { isAuthenticated } from '../../helpers/auth';
import { AuthContext } from '../../pages/auth/AuthContext';

const Footer = () => {
  const { isUserAuthenticated } = useContext(AuthContext);
  

  

  
  

  return (
    <footer>
      <div className="footerContainer">
        <div className="mediaIcons">
          <IconContext.Provider value={{ classname: "footericons" }}>
          <Link to="/"><FaFacebook className='fa-icon'/></Link>
          <Link to="/"><FaInstagram className='fa-icon' /></Link>
          <Link to="/"><FaXTwitter  className='fa-icon'/></Link>
          <Link to="/"><FaTiktok className='fa-icon' /></Link>
          <Link to="/"><FaYoutube className='fa-icon'/></Link>
          </IconContext.Provider>
        </div>
        <div className="footerNav">
        <ul className= "footer-nav">
        <li>
          <Link to="/" className="nav-links" >
            Home
          </Link>
        </li>
        <li>
          <Link to="/anime" className="nav-links" >
            Anime
          </Link>
        </li>
        <li>
          <Link to="/news" className="nav-links" >
            News
          </Link>
        </li>
        <li>
          <Link to="/store" className="nav-links" >
            Store
          </Link>
        </li>
        {isUserAuthenticated && (
          <li>
            <Link to="/wishlist" className="nav-links" >
              <FaHeart></FaHeart>
            </Link>
          </li>
        )}
        <li>
          <Link to="/cart" className="nav-links" >
            <FaCartShopping></FaCartShopping>
          </Link>
        </li>
        
      </ul>
        </div>
        <div className="footerCopyright">
          <p>Copyright &copy;2024; Designed by <span className="designer">Marco Antonio</span></p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
