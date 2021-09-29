import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings} from "@material-ui/icons";
//import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {Dropdown} from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbar">
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
            <Link to="#">Profile</Link>
            <Link to="#">LogOut</Link>
            
    </div>
  </div> 
          {/* <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" /> */}
          
        </div>
      </div>
    </div>
  );
}
