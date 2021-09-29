import "./productList.css";


export default function ProductList() {
  const Button = ({ type }) => {
    return <button className={"productListButton " + type}>{type}</button>;
  };
  return (
    <div className="productList">
      <h3 className="productListTitle">ActiveOrders</h3>
      <table className="productListTable">
        <tr className="productListTr">
        <th className="productListTh">OrderID</th>
          <th className="productListTh">Chemical Name</th>
          <th className="productListTh">Quantity</th>
          <th className="productListTh">CAS Number</th>
          <th className="productListTh">Importance Type</th>
          <th className="productListTh">Vendor Name</th>
          <th className="productListTh">Order Status</th>
          <th className="productListTh">Product Details</th>
        </tr>
        <tr className="productListTr">
          <td className="productListUser">
            <span className="productListName">210920210001</span>
          </td>
          <td className="productListDate">Hydrogen</td>
          <td className="productListAmount">25 kg</td>
          <td className="productListStatus">CAS 001</td>
          <td className="productListDate">A</td>
          <td className="productListAmount">Arcnas</td>
          <td className="productListStatus">
            <Button type="Approved" />
          </td>
          <td className="productListAmount">Gaseous state </td>
        </tr>
      </table>
    </div>
  )
}
