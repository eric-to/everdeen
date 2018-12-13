import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ currentUser, signOut }) => {
  const sessionLinks = () => (
    <div className="navbar">
      <img className= "main-logo" src="https://static1.squarespace.com/static/53fe4a70e4b0a2293ab0e42a/t/53fe4b7ce4b03ae33c17c7d2/1543455129039/"></img>

      <div className="navbar-links">
        <div>
          <Link to="/signin">Log In</Link>
        </div>
        <div>
          <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );

  const personalGreeting = () => (
    <div>
      <h3>Hi, {currentUser.email}!</h3>
      <button onClick={signOut}>Log Out</button>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
}

export default Navbar;
