import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { Scontext } from '../../context/Scontext';
import { assets } from '../../assets/assets';


const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const { getTotalCartAmount, token, setToken } = useContext(Scontext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setShowDropdown(false);
    setIsMenuOpen(false); 
    navigate("/");
  };

  const toggleDropdown = () => setShowDropdown((prev) => !prev);
  const toggleMobileMenu = () => setIsMenuOpen((prev) => !prev);

 
  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false); 
    }
  };

  return (
    <div className="navbar">
      <Link to="/" onClick={handleLinkClick}>
        <img className="desktop" src={assets.logo} width={100} alt="" />
      </Link>

      
      <div className="hamburger-menu" onClick={toggleMobileMenu}>
        <div>🍔</div>
      </div>

      <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => { setMenu("Home"); handleLinkClick(); }} className={menu === "Home" ? "active" : ""}>
          🏠 Home
        </Link>
        <a href="#explore-menu" onClick={() => { setMenu("Menu"); handleLinkClick(); }} className={menu === "Menu" ? "active" : ""}>
          🍽 Menu
        </a>
        <a href="#footer" onClick={() => { setMenu("Made-By"); handleLinkClick(); }} className={menu === "Made-By" ? "active" : ""}>
          👩‍🍳 Made-By
        </a>
        <a href="#footer" onClick={() => { setMenu("Contact Us"); handleLinkClick(); }} className={menu === "Contact Us" ? "active" : ""}>
          📞 Contact Us
        </a>
      </ul>

      <div className="navbar-right">
        <span>🔍</span> 
        <div className="navbar-search-icon">
          <Link to="/cart" onClick={handleLinkClick}>
            <span>🛒</span> 
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}> </div>
        </div>
        {!token ? (
          <button className="navbar-signin-btn" onClick={() => setShowLogin(true)}>
            Sign In
          </button>
        ) : (
          <div className="navbar-profile" onClick={toggleDropdown}>
            <span>👤</span> 
            {showDropdown && (
              <ul className="nav-profile-dropdown">
                <li onClick={()=> {navigate("/myorders"); setShowDropdown(true)}}>
                  <span>👜</span> 
                  <p>Orders</p>
                </li>
                <hr />
                <li onClick={logout}>
                  <span>🚪</span> 
                  <p>LogOut</p>
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
