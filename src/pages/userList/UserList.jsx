import "./userList.css";
import DeleteIcon from '@mui/icons-material/Delete';
//  import { DataGrid } from "@material-ui/data-grid";
// import { DeleteOutline } from "@material-ui/icons";
//  import { userRows } from "../../dummyData";
  import { Link } from "react-router-dom";
//  import { useState } from "react";

export default function UserList() {
    
        const Button = ({ type }) => {
          return <button className={"userListButton " + type}>{type}</button>;
        };

        return (
            <div className="userList">
              <h3 className="userListTitle">SavedOrders</h3>
              <table className="userListTable">
                <thead>
                <tr className="userListTr">
                <th className="userListTh">OrderID</th>
                  <th className="userListTh">Chemical Name</th>
                  <th className="userListTh">Quantity</th>
                  <th className="userListTh">CAS Number</th>
                  <th className="userListTh">Importance Type</th>
                  <th className="userListTh">Vendor Name</th>
                  <th className="userListTh">Order Status</th>
                  <th className="userListTh">Product Details</th>
                </tr>
                </thead>
                <tr className="userListTr1">
          <td className="userListUser">
            <span className="userListName"></span>
          </td>
          <td className="userListDate"></td>
          <td className="userListAmount"></td>
          <td className="userListStatus"></td>
          <td className="userListDate"></td>
          <td className="userListAmount"></td>
          <td className="userListStatus">
            <Button type=""/>
          </td>
          <td className="productListAmount"></td>
          <td>
            <Link to="/edit">
                          <button className="userListbutton">Edit</button>
            </Link>
            <DeleteIcon className="userListDelete"/>
          </td>
        </tr>
                </table>
                </div>

        )
}
