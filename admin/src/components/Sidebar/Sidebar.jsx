import React, { useState } from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleLinkClick = () => {
    setIsSidebarVisible(false);
  };

  return (
    <div>
      <div className={`sidebar ${isSidebarVisible ? 'show' : ''}`}>
        <div className="sidebar-options">
          <NavLink to='/add' className="sidebar-option" onClick={handleLinkClick}>
            <p>➕ Add Items</p>
          </NavLink>
          <NavLink to='/list' className="sidebar-option" onClick={handleLinkClick}>
            <p>📋 List Items</p>
          </NavLink>
          <NavLink to='/orders' className="sidebar-option" onClick={handleLinkClick}>
            <p>🧾 Orders</p>
          </NavLink>
          <NavLink to='/reservations' className="sidebar-option" onClick={handleLinkClick}>
            <p>📅 Reservations</p>
          </NavLink>
        </div>
      </div>

      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isSidebarVisible ? 'X' : '≡'}
      </button>
    </div>
  );
};

export default Sidebar;
