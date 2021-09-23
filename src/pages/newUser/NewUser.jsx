import "./newUser.css";
import { Link } from "react-router-dom";

export default function NewUser() {
  return (
    
    <div className="newUser">
      <div className="userShow">
      <h1 className="newUserTitle">Create Order</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Order Created By</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="newUserItem">
          <label>Employee ID</label>
          <input type="text" placeholder="" />
        </div>
        <div className="newUserItem">
          <label>Department</label>
          <input type="text" placeholder="" />
        </div>
        <div className="newUserItem">
          <label>Product Name</label>
          <input type="text" placeholder="" />
        </div>
        <div className="newUserItem">
          <label>CAS Number</label>
          <input type="text" placeholder="" />
        </div>
        <div className="newUserItem">
          <label>Brand</label>
          <input type="text" placeholder="" />
        </div>
        <div className="newUserItem">
          <label>Catalogue Number</label>
          <input type="text" placeholder="" />
        </div>
        <div className="newUserItem">
          <label>Pack Size</label>
          <input type="text" placeholder="" />
        </div>
        <div className="newUserItem">
          <label>Order Quantity</label>
          <input type="text" placeholder="" />
        </div>
        <div className="newUserItem">
          <label>Importance Type</label>
          <input type="text" placeholder="A/B/C" />
        </div>
        <div className="newUserItem">
          <label>Product Type</label>
          <input type="text" placeholder="" />
        </div>
        <div className="newUserItem">
          <label>Vendor Name</label>
          <input type="text" placeholder="" />
        </div>
        <div className="newUserItem">
          <label>Add Comments</label>
          <input type="text" placeholder="" />
        </div><br/>

        {/* <div className="newUserItem">
          <label>Product Type</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div> 
        </div>*/}
        {/* <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div> */}
        <Link to=""><button className="newUserButton">Submit</button></Link>
        <p>&nbsp;&nbsp;</p>
        <Link to="/users">
          <button className="newUserButton">Save Order</button>
        </Link>
        
      </form>
      
    </div>
    </div>
  );
}
