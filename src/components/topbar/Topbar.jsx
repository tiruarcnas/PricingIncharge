import React from 'react';
import './topbar.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

export default function Topbar() {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div className="header" variant="h6">
      <div className="topbarWrapper">
        <div className="icon" onClick={() => setIsOpened(!isOpened)}>
          {isOpened ? <ChevronLeftIcon /> : <MenuIcon />}
        </div>
        <div className="topLeft">
          <span className="logo">Inventoryadmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <div class="dropdown">
            <button class="dropbtn">InventoryIncharge</button>
            <div class="dropdown-content">
              <a href="/profile">Profile</a>
              {/* <Link to="/profile" className="a">
                Profile
              </Link> */}
              <a href="/">LogOut</a>
              {/* <Link to="/" className="a">
                Logout
              </Link> */}
            </div>
          </div>
          {/* <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" /> */}
        </div>
      </div>
    </div>
  );
}
