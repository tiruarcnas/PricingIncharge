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
      <div className="userTitleContainer">
        <h1 className="userTitle">My Profile</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Order Created By</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Employee Id</label>
                <input
                  type="text"
                  placeholder="Anna Becker"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Department</label>
                <input
                  type="text"
                  placeholder="annabeck99@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Product Name</label>
                <input
                  type="text"
                  placeholder=""
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>CAS Number</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Brand</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>catalouge Number</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Pack Size</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Order Quantity</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Importance Type</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Product Type</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Vendor Name</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Add Comments</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
      </div>
        </div>
    )
}
