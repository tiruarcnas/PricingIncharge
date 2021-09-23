import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { activeOrdersRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductList() {
  // const [data, setData] = useState(activeOrdersRows);

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

  // const columns = [
  //   { field: "id", headerName: "ID", width: 90 },
  //   {
  //     field: "order id",
  //     headerName: "Order ID",
      
  //     renderCell: (params) => {
  //       return (
  //         <div className="productListItem">
  //           <img className="productListImg" src={params.row.img} alt="" />
  //           {params.row.name}
  //         </div>
  //       );
  //     },
  //   },
  //   { field: "chemical name", headerName: "Chemical Name", width: 120 },
  //   {
  //     field: "quantity",
  //     headerName: "Quantity",
  //     width: 120,
  //   },
  //   {
  //     field:"cas number",
  //     headerName: "CAS Number",
  //     width: 120,
  //   },
  //   {
  //     field: "importance type",
  //     headerName: "Importance Type",
  //     width: 120,
  //   },
  //   {
  //     field: "vendor name",
  //     headerName: "Vendor Name",
  //     width: 120,
  //   },
  //   {
  //     field: "status",
  //     //headerName: "Status",
  //     width: 120,
  //   },
  //   {
  //     field: "product details",
  //     headerName: "Product Details",
  //     width: 120,
  //   },
    
  //   {
  //     field: "action",
  //     headerName: "Action",
  //     width: 120,
  //     renderCell: (params) => {
  //       return (
  //         <>
  //           <Link to={"/product/" + params.row.id}>
  //             <button className="productListEdit">Edit</button>
  //           </Link>
  //           <DeleteOutline
  //             className="productListDelete"
  //             onClick={() => handleDelete(params.row.id)}
  //           />
  //         </>
  //       );
  //     },
  //   },
  // ];

  // return (
  //   <div className="productList">
  //     <DataGrid
  //       rows={data}
  //       disableSelectionOnClick
  //       columns={columns}
  //       pageSize={8}
  //       checkboxSelection
  //     />
  //   </div>
  // );
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">ActiveOrders</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
        <th className="widgetLgTh">OrderID</th>
          <th className="widgetLgTh">Chemical Name</th>
          <th className="widgetLgTh">Quantity</th>
          <th className="widgetLgTh">CAS Number</th>
          <th className="widgetLgTh">Importance Type</th>
          <th className="widgetLgTh">Vendor Name</th>
          <th className="widgetLgTh">Order Status</th>
          <th className="widgetLgTh">Product Details</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">210920210001</span>
          </td>
          <td className="widgetLgDate">Hydrogen</td>
          <td className="widgetLgAmount">25 kg</td>
          <td className="widgetLgStatus">CAS 001</td>
          <td className="widgetLgDate">A</td>
          <td className="widgetLgAmount">Arcnas</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
          <td className="widgetLgAmount">Gaseous state </td>
        </tr>
      </table>
    </div>
  )
}
