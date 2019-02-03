import React from 'react';
import { Link } from 'react-router-dom';

import LogoSVG from '../logo/logo_svg';
import Searchbar from './searchbar';

const Navbar = ({ currentUser, logOut }) => {
  const splashNavbar = () => {
    return (
      <div>
        <div className="splash-navbar-container">
          <div id="nav-logo-container">
            <Link className="nav-logo" to="/"><LogoSVG /></Link>
          </div>
          <div className="splash-navbar-links">
            <div className="splash-nav-link">
              <Link to="/login">Log In</Link>
            </div>
            <div className="splash-nav-link">
              <Link to="/signup">Sign Up</Link>
            </div>
            <div className="fa-links">
              <a href="https://github.com/eric-to" target="_blank">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/ertoo" target="_blank">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const homeNavbar = () => {
    return (
      <header>
        <div className="logo-search-container">
          <Link className="nav-logo" to="/"><LogoSVG /></Link>
          <Searchbar />
        </div>

        <div className="nav-links">
          <div><Link to="/">Home</Link></div>
          <div><Link to="/" onClick={logOut}>Log Out</Link></div>
        </div>

      </header>
    );
  };

  return currentUser ? homeNavbar() : splashNavbar();
}

export default Navbar;
