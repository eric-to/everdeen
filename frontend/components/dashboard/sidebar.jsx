import React from 'react';

const Sidebar = ({ currentUser }) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="header-card-container">
          <div className="header-card">
            <h3>Stocks</h3>
          </div>
        </div>
        <div className="header-card-container">
          <div className="header-card">
            <h3>Watchlist</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
