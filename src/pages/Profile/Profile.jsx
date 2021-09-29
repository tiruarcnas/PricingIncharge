import React from 'react';
import "./profile.css";
import { Link } from "react-router-dom";
import {
    // CalendarToday,
    // LocationSearching,
    // MailOutline,
    // PermIdentity,
    // PhoneAndroid,
    Publish,
  } from "@material-ui/icons";

export default function Profile() {
    return (
        <div>
           <div className="profile">
      <div className="profileTitleContainer">
        <h1 className="profileTitle">My Profile</h1>
        <Link to="/newUser">
          <button className="profileAddButton">Edit</button>
        </Link>
      </div>
      <div className="profileContainer">
        <div className="profileUpdate">
          
          <form className="profileUpdateForm">
            <div className="profileUpdateLeft">
              <div className="profileUpdateItem">
                <label>First Name</label>
                <input
                  type="text"
                  placeholder=""
                  className="profileUpdateInput"
                />
              </div>
              <div className="profileUpdateItem">
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder=""
                  className="profileUpdateInput"
                />
              </div>
              <div className="profileUpdateItem">
                <label>Employement ID</label>
                <input
                  type="text"
                  placeholder=""
                  className="profileUpdateInput"
                />
              </div>
              <div className="profileUpdateItem">
                <label>Designation</label>
                <input
                  type="text"
                  placeholder=""
                  className="profileUpdateInput"
                />
              </div>
              <div className="profileUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder=""
                  className="profileUpdateInput"
                />
              </div>
              <div className="profileUpdateItem">
                <label>Phone Number</label>
                <input
                  type="text"
                  placeholder=""
                  className="profileUpdateInput"
                />
              </div>
              <div className="profileUpdateItem">
                <label>Reporting To</label>
                <input
                  type="text"
                  placeholder=""
                  className="profileUpdateInput"
                />
              </div>
              <div className="profileUpdateItem">
                <label>Wing</label>
                <input
                  type="text"
                  placeholder=""
                  className="profileUpdateInput"
                />
              </div>
              <div className="profileUpdateItem">
                <label>HQ Location</label>
                <input
                  type="text"
                  placeholder=""
                  className="profileUpdateInput"
                />
              </div>
              <div className="profileUpdateItem">
                <label>HQ Address</label>
                <input
                  type="text"
                  placeholder=""
                  className="profileUpdateInput"
                />
              </div>
              <div className="profileUpdateItem">
                <label>Blood Group</label>
                <input
                  type="text"
                  placeholder=""
                  className="profileUpdateInput"
                />
              </div>
              
            </div>
            <div className="profileUpdateRight">
              <div className="profileUpdateUpload">
                <img
                  className="profileUpdateImg"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="profileUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="profileUpdateButton">Create</button>
            </div>
          </form>
        </div>
      </div>
      </div>
        </div>
    )
}
