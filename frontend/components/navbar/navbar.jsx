import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ currentUser, signOut }) => {
  const splashLinks = () => (
    <div className="navbar-links">
      <div class="fa-links">
        <a href="https://www.linkedin.com/in/ertoo" target="_blank">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/eric-to" target="_blank">
          <i class="fab fa-github"></i>
        </a>
      </div>
      <div>
        <Link to="/login">Log In</Link>
      </div>
      <div>
        <Link to="/signup">Sign Up</Link>
      </div>
      <div>
        <Link to="/">Dark Mode</Link>
      </div>
    </div>
  );

  const homeLinks = () => (
    <div>
      {/* TODO: make sure the user stays logged in upon clicking home */}
      <Link to="/">Home</Link>
      <button onClick={signOut}>Log Out</button>
    </div>
  );

  const navBar = () => {
    const navBarLinks = () => {
      return currentUser ? homeLinks() : splashLinks();
    };

    return (
      <div className="navbar-container">
        <div>
          <Link to="/">
            <img className="navbar-logo" src="https://static1.squarespace.com/static/53fe4a70e4b0a2293ab0e42a/t/53fe4b7ce4b03ae33c17c7d2/1543455129039/"></img>
          </Link>
        </div>
        {navBarLinks()}
      </div>
    );
  };

  return navBar();

  // const sessionLinks = () => (
  //   <div className="navbar-container">
  //     <div>
  //       <Link to="/">
  //         <img className="navbar-logo" src="https://static1.squarespace.com/static/53fe4a70e4b0a2293ab0e42a/t/53fe4b7ce4b03ae33c17c7d2/1543455129039/"></img>
  //       </Link>
  //     </div>

  //     <div className="navbar-links">
  //       <div class="fa-links">
  //         <a href="https://www.linkedin.com/in/ertoo" target="_blank">
  //           <i class="fab fa-linkedin-in"></i>
  //         </a>
  //         <a href="https://github.com/eric-to" target="_blank">
  //           <i class="fab fa-github"></i>
  //         </a>
  //       </div>
  //       <div>
  //         <Link to="/login">Log In</Link>
  //       </div>
  //       <div>
  //         <Link to="/signup">Sign Up</Link>
  //       </div>
  //       <div>
  //         <Link to="/">Dark Mode</Link>
  //       </div>
  //     </div>
  //   </div>
  // );

  // const personalGreeting = () => (
  //   <div>
  //     <h3>Hi, {currentUser.email}!</h3>
  //     <button onClick={signOut}>Log Out</button>
  //   </div>
  // );

  // return currentUser ? personalGreeting() : sessionLinks();
}

export default Navbar;
