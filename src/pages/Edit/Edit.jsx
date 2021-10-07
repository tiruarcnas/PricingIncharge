import React from 'react'
import "./edit.css";
//import { Link } from "react-router-dom";
import {
   
    Publish,
  } from "@material-ui/icons";


export default function Edit() {
    return (
        <div>
           <div className="edit">
      <div className="editTitleContainer">
        <h1 className="editTitle">My Profile</h1>
        {/* <Link to="/newUser">
          <button className="editAddButton">Edit</button>
        </Link> */}
      </div>
      <div className="editContainer">
        <div className="editUpdate">
          <span className="editUpdateTitle">Edit</span>
          <form className="editUpdateForm">
            <div className="editUpdateLeft">
              <div className="editUpdateItem">
                <label>First Name</label>
                <input
                  type="text"
                  placeholder=""
                  className="editUpdateInput"
                />
              </div>
              <div className="editUpdateItem">
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder=""
                  className="editUpdateInput"
                />
              </div>
              <div className="editUpdateItem">
                <label>Employement ID</label>
                <input
                  type="text"
                  placeholder=""
                  className="editUpdateInput"
                />
              </div>
              <div className="editUpdateItem">
                <label>Designation</label>
                <input
                  type="text"
                  placeholder=""
                  className="editUpdateInput"
                />
              </div>
              <div className="editUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder=""
                  className="editUpdateInput"
                />
              </div>
              <div className="editUpdateItem">
                <label>Phone Number</label>
                <input
                  type="text"
                  placeholder=""
                  className="editUpdateInput"
                />
              </div>
              <div className="editUpdateItem">
                <label>Reporting To</label>
                <input
                  type="text"
                  placeholder=""
                  className="editUpdateInput"
                />
              </div>
              <div className="editUpdateItem">
                <label>Wing</label>
                <input
                  type="text"
                  placeholder=""
                  className="editUpdateInput"
                />
              </div>
              <div className="editUpdateItem">
                <label>HQ Location</label>
                <input
                  type="text"
                  placeholder=""
                  className="editUpdateInput"
                />
              </div>
              <div className="editUpdateItem">
                <label>HQ Address</label>
                <input
                  type="text"
                  placeholder=""
                  className="editUpdateInput"
                />
              </div>
              <div className="editUpdateItem">
                <label>Blood Group</label>
                <input
                  type="text"
                  placeholder=""
                  className="editUpdateInput"
                />
              </div>
              <button className="editUpdateButton">Update</button>
            </div>
            {/* <div className="editUpdateRight">
              <div className="editUpdateUpload">
                <img
                  className="editUpdateImg"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="editUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="editUpdateButton">Update</button>
            </div> */}
          </form>
        </div>
      </div>
      </div>
        </div>
    )
}
