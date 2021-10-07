import React, { Component } from 'react';
import "./profile.css";
import { Link } from "react-router-dom";
import {
    Publish,
  } from "@material-ui/icons";
 import axios from 'axios';
 import { Redirect } from 'react-router';
 class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        FirstName: "",
        LastName: "",
        EmployeeId: "",            
        Designation: "",
        Email: "",
        PhoneNumber: "",
        ReportingTo: "",
        Wing:"",
        HQLocation: "",
        HQAddress: "",
        BloodGroup: "",
        redirect: false
    }
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange =this.handleLastNameChange.bind(this);
    this.handleEmployeeIdChange = this.handleEmployeeIdChange.bind(this);
    this.handleDesignationChange = this.handleDesignationChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this)
    this.handleReportingToChange = this.handleReportingToChange.bind(this);
    this.handleWingChange = this.handleWingChange.bind(this);
    this.handleHQLocationChange= this.handleHQLocationChange.bind(this);
    this.handleHQAddressChange = this.handleHQAddressChange.bind(this)
    this.handleBloodGroupChange = this.handleBloodGroupChange.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  handleFirstNameChange(e) {
    this.setState({FirstName: e.target.value})
  }
  handleLastNameChange(e) {
    this.setState({LastName:e.target.value})
  }
 handleEmployeeIdChange (e) {
   this.setState({EmployeeId:e.target.value})
 }
 handleDesignationChange (e){
   this.setState({Designation:e.target.value})
 }
  handleEmailChange(e) {
    this.setState({Email: e.target.value})
  }

  handlePhoneNumberChange(e) {
    this.setState({PhoneNumber: e.target.value})
  }

  handleReportingToChange(e) {
    this.setState({ReportingTo: e.target.value})
  }

  handleWingChange(e) {
    this.setState({Wing: e.target.value})
  }

  handleHQLocationChange(e) {
    this.setState({HQLocation: e.target.value})
  }

  handleHQAddressChange(e) {
    this.setState({HQAddress: e.target.value})
  }
  handleBloodGroupChange(e){
    this.setState({BloodGroup:e.target.value})
  }
  
  addUser(event) {
    event.preventDefault();
    const userAdd = {
        FirstName: this.state.FirstName,
        LastName:this.state.LastName,
        EmployeeId: this.state.EmployeeId,
        Designation: this.state.Designation,
        Email: this.state.Email,
        PhoneNumber: this.state.PhoneNumber,
        ReportingTo: this.state.ReportingTo,   
        Wing: this.state.Wing ,
        HQLocation:this.state.HQLocation,    
        HQAddress:this.state.HQAddress,
        BloodGroup:this.state.BloodGroup
    }
    console.log(userAdd)
    axios.post('http://localhost:9000/api/profile', userAdd)
    .then(res => { 
        console.log(res);
        this.setState({ redirect: this.state.redirect === false });
    })
    .catch(err => { console.log(err) });
  }
  render(){
    return (
        <div>
           <div className="profile">
            <div className="profileTitleContainer">
              <h1 className="profileTitle">My Profile</h1>
                <Link to="/edit">
                 <button className="profileAddButton">Edit</button>
                </Link>
            </div>
            <div className="profileContainer">
                <div className="profileUpdate">
                  <form onSubmit={this.addUser} method="post" className="profileUpdateForm">
                    <div className="profileUpdateLeft">
                      <div className="profileUpdateItem">
                        <label>First Name</label>
                          <input
                              type="text"
                              placeholder=""
                              className="profileUpdateInput"
                              name="FirstName"
                              onChange={this.handleFirstNameChange} value={this.state.FirstName}
                          />
                      </div>
                    <div className="profileUpdateItem">
                        <label>Last Name</label>
                          <input
                              type="text"
                              placeholder=""
                              className="profileUpdateInput"
                              name="LastName"
                              onChange={this.handleLastNameChange} value={this.state.LastName}
                          />
                    </div>
                    <div className="profileUpdateItem">
                        <label>Employement ID</label>
                          <input
                              type="text"
                              placeholder=""
                              className="profileUpdateInput"
                              name="EmployeeId"
                              onChange={this.handleEmployeeIdChange} value={this.state.EmployeeId}
                          />
                    </div>
                    <div className="profileUpdateItem">
                        <label>Designation</label>
                          <input
                              type="text"
                              placeholder=""
                              className="profileUpdateInput"
                              name="Designation"
                              onChange={this.handleDesignationChange} value={this.state.Designation}
                          />
                    </div>
                    <div className="profileUpdateItem">
                        <label>Email</label>
                          <input
                              type="text"
                              placeholder=""
                              className="profileUpdateInput"
                              name="Email"
                              onChange={this.handleEmailChange} value={this.state.Email}
                          />
                    </div>
                    <div className="profileUpdateItem">
                        <label>Phone Number</label>
                          <input
                              type="text"
                              placeholder=""
                              className="profileUpdateInput"
                              name="PhoneNumber"
                              onChange={this.handlePhoneNumberChange} value={this.state.PhoneNumber}
                          />
                    </div>
                    <div className="profileUpdateItem">
                        <label>Reporting To</label>
                            <input
                  type="text"
                  placeholder=""
                  className="profileUpdateInput"
                  name="ReportingTo"
                  onChange={this.handleReportingToChange} value={this.state.ReportingTo}
                />
              </div>
              <div className="profileUpdateItem">
                <label>Wing</label>
                <input
                  type="text"
                  placeholder=""
                  className="profileUpdateInput"
                  name="Wing"
                  onChange={this.handleWingChange} value={this.state.Wing}
                />
              </div>
              <div className="profileUpdateItem">
                <label>HQ Location</label>
                <input
                  type="text"
                  placeholder=""
                  className="profileUpdateInput"
                  name="HQLocation"
                  onChange={this.handleHQLocationChange} value={this.state.HQLocation}
                />
              </div>
              <div className="profileUpdateItem">
                <label>HQ Address</label>
                <input
                  type="text"
                  placeholder=""
                  className="profileUpdateInput"
                  name="HQAddress"
                  onChange={this.handleHQAddressChange} value={this.state.HQAddress}
                />
              </div>
              <div className="profileUpdateItem">
                <label>Blood Group</label>
                <input
                  type="text"
                  placeholder=""
                  className="profileUpdateInput"
                  name="BloodGroup"
                  onChange={this.handleBloodGroupChange} value={this.state.BloodGroup}
                />
              </div>

              <button type ="submit" className="profileUpdateButton">Save</button>
              
            </div>
            {/* <div className="profileUpdateRight">
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
              <button type ="submit" className="profileUpdateButton">Create</button>
            </div> */}
          </form>
          {this.state.redirect && (
                <Redirect to={'/users'}/>
            )}
        </div>
      </div>
      </div>
        </div>
    )
  }
}
export default Profile;