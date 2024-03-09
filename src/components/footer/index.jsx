import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom'
import './Footer.css'; // Importa el archivo de estilos local

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="mediaIcons">
          <IconContext.Provider value={{ classname: "footericons" }}>
          <a href="/"><FaFacebook className='fa-icon'/></a>
          <a href="/"><FaInstagram className='fa-icon' /></a>
          <a href="/"><FaXTwitter  className='fa-icon'/></a>
          <a href="/"><FaTiktok className='fa-icon' /></a>
          <a href="/"><FaYoutube className='fa-icon'/></a>
          </IconContext.Provider>
        </div>
        <div className="footerNav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/anime">Anime</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/store">Store</a></li>
            <li><a href="/signin">Sign in</a></li>
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
