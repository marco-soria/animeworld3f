import { useContext, useState } from "react";
import { IconContext } from "react-icons";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import logo from "../../assets/header/awlogo1.png";
import { AuthContext } from "../../pages/auth/AuthContext";
import "./Header.css";

const Header = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext must be used within AuthProvider");
  }

  const { isUserAuthenticated } = authContext;

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleLinkClick = () => {
    setIsActive(false);
  };

  return (
    <nav className="navbar">
      <span className="navbar-toggle" onClick={handleClick}>
        <IconContext.Provider value={{ color: "#C21292", size: "30px" }}>
          <GiHamburgerMenu />
        </IconContext.Provider>
      </span>
      <div className="divlogo">
        <img src={logo} height="50px" width="50px" alt="AnimeWorld Logo" />
        <Link to="/" className="logo" onClick={handleLinkClick}>
          AnimeWorld
        </Link>
      </div>
      <ul className={`main-nav ${isActive ? "active" : ""}`}>
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
        {isUserAuthenticated && (
          <li>
            <Link
              to="/wishlist"
              className="nav-links"
              onClick={handleLinkClick}
            >
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
