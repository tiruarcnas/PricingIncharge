import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings} from "@material-ui/icons";
import { Link } from "react-router-dom";
//import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// import {Dropdown} from 'react-bootstrap';

export default function Topbar() {
  return (
    <div className="topbar" >
      <div className="topbarWrapper">
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
    <button class="dropbtn">InventoryIncharge 
    
    </button>
      <div class="dropdown-content">
            {/* <a href="/profile">Profile</a> */}
            <Link to="/profile" className="a">
          Profile
        </Link>
            <a href="/">LogOut</a> 
            {/* <Link to="#" className="a">
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
