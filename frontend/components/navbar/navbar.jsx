import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ currentUser, signOut }) => {
  const sessionLinks = () => (
    <div class="session-links">
      <Link to="/signin">Sign In</Link>
      <br></br>
      <Link to="/signup">Sign up!</Link>
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
