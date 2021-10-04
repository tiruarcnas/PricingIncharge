import "./userList.css";
 import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
 import { userRows } from "../../dummyData";
 import { Link } from "react-router-dom";
 import { useState } from "react";

export default function UserList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "orderId",
      headerName: "Order ID",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.orderId}
          </div>
        );
      },
    },
    { field: "chemicalName", headerName: "Chemical Name", width: 200 },
    {
      field: "quantity",
      headerName: "Quantity",
      width: 120,
    },
    {
      field: "casNumber",
      headerName: "CAS",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
//   const Button = ({ type }) => {
//     return <button className={"saveProductsButton " + type}>{type}</button>;
//   };

//   return(
//     // <div className="userList">
//     //       <h3 className="userListTitle">Saved Orders</h3>
//     //       <table className="userListTable">
//     //         <tr className="userListTr">
//     //         <th className="userListTh">OrderID</th>
//     //           <th className="userListTh">Chemical Name</th>
//     //           <th className="userListTh">Quantity</th>
//     //           <th className="userListTh">CAS Number</th>
//     //           <th className="userListTh">Importance Type</th>
//     //           <th className="userListsTh">Vendor Name</th>
//     //           <th className="userListTh">Order Status</th>
//     //           <th className="saveProductsTh">Product Details</th>
//     //           <th className="saveProductsTh">Action</th>
//     //         </tr>
//     //         <tr className="userListTr">
//     //           <td className="userListUser">
//     //             <span className="userListName">210920210001</span>
//     //           </td>
//     //           <td className="userListDate">Hydrogen</td>
//     //           <td className="userListAmount">25 kg</td>
//     //           <td className="userListsStatus">CAS 001</td>
//     //           <td className="userListDate">A</td>
//     //           <td className="userListAmount">Arcnas</td>
//     //           <td className="userListStatus">
//     //             <Button type="Approved" />
//     //           </td>
//     //           <td className="userListAmount">Gaseous state </td>
//     //           <td className="userListAmount">
//     //             <Link to={"/user/1"}>
//     //              <button className="userListEdit">Edit</button>
//     //            </Link></td>
//     //           <td className="userListAmount">
//     //             <DeleteOutline/></td>
//     //         </tr>
//     //       </table>
//     //     </div>
//     <div className="userList">
//        <h3 className="userListTitle">Saved Orders</h3>
//        <table class="table">
//   <thead>
//     <tr>
//       <th scope="col">Order ID</th>
//       <th scope="col">Chemical Name</th>
//       <th scope="col">Quantity</th>
//       <th scope="col">CAS Number</th>
//       <th scope="col">CAS Number</th>
//       <th scope="col">CAS Number</th>
//       <th scope="col">CAS Number</th>
//       <th scope="col">CAS Number</th>
      
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row">1</th>
//       <td>Mark</td>
//       <td>Otto</td>
//       <td>@mdo</td>
//     </tr>
//     <tr>
//       <th scope="row">2</th>
//       <td>Jacob</td>
//       <td>Thornton</td>
//       <td>@fat</td>
//     </tr>
//     <tr>
//       <th scope="row">3</th>
//       <td colspan="2">Larry the Bird</td>
//       <td>@twitter</td>
//     </tr>
//   </tbody>
// </table>
//     </div>

    

}
