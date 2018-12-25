import React from 'react';
import { Link } from 'react-router-dom';

import LogoSVG from '../logo/logo_svg';
import SearchBar from './search_bar';

const Navbar = ({ currentUser, logOut }) => {
  const splashNavbar = () => {
    return (
      <div>
        <div className="splash-navbar-container">
          <div>
            <Link to="/">
              <img className="splash-navbar-logo" src="https://static1.squarespace.com/static/53fe4a70e4b0a2293ab0e42a/t/53fe4b7ce4b03ae33c17c7d2/1543455129039/"></img>
            </Link>
          </div>
          <div className="splash-navbar-links">
            <div>
              <Link to="/login">Log In</Link>
            </div>
            <div>
              <Link to="/signup">Sign Up</Link>
            </div>
            <div>
              <Link id="theme" to="/">Pink Mode</Link>
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
        <Link className="nav-logo" to="/"><LogoSVG /></Link>
        <div className="nav-logo-search">
          <SearchBar />
        </div>

        <div className="nav-links">
          <div></div>
          <div><Link to="/">Home</Link></div>
          <div><Link id="theme" to="/">Pink Mode</Link></div>
          <div><Link to="/" onClick={logOut}>Log Out</Link></div>
        </div>

      </header>
    );
  };

  return currentUser ? homeNavbar() : splashNavbar();
}

export default Navbar;
