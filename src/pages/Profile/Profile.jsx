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
          <button className="profileAddButton">Create</button>
        </Link>
      </div>
      <div className="profileContainer">
        <div className="profileUpdate">
          <span className="profileUpdateTitle">Edit</span>
          <form className="profileUpdateForm">
            <div className="profileUpdateLeft">
              <div className="profileUpdateItem">
                <label>Order Created By</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className="profileUpdateInput"
                />
              </div>
              <div className="profileUpdateItem">
                <label>Employee Id</label>
                <input
                  type="text"
                  placeholder="Anna Becker"
                  className="profileUpdateInput"
                />
              </div>
              <div className="profileUpdateItem">
                <label>Department</label>
                <input
                  type="text"
                  placeholder="annabeck99@gmail.com"
                  className="profileUpdateInput"
                />
              </div>
              <div className="profileUpdateItem">
                <label>Product Name</label>
                <input
                  type="text"
                  placeholder=""
                  className="profileUpdateInput"
                />
              </div>
              <div className="profileUpdateItem">
                <label>CAS Number</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="profileUpdateInput"
                />
              </div>
              <div className="profileUpdateItem">
                <label>Brand</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="profileUpdateInput"
                />
              </div>
              <div className="profileUpdateItem">
                <label>catalouge Number</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="profileUpdateInput"
                />
              </div>
              <div className="profileUpdateItem">
                <label>Pack Size</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="profileUpdateInput"
                />
              </div>
              <div className="profileUpdateItem">
                <label>Order Quantity</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="profileUpdateInput"
                />
              </div>
              <div className="profileUpdateItem">
                <label>Importance Type</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="profileUpdateInput"
                />
              </div>
              <div className="profileUpdateItem">
                <label>Product Type</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="profileUpdateInput"
                />
              </div>
              <div className="profileUpdateItem">
                <label>Vendor Name</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="profileUpdateInput"
                />
              </div>
              <div className="profileUpdateItem">
                <label>Add Comments</label>
                <input
                  type="text"
                  placeholder="New York | USA"
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
              <button className="profileUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
      </div>
        </div>
    )
}
