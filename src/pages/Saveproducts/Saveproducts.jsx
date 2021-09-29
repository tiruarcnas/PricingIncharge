import React from 'react'
import "./saveproducts.css"

export default function Saveproducts() {
    const Button = ({ type }) => {
        return <button className={"saveProductsButton " + type}>{type}</button>;
      };
      return (
        <div className="saveProducts">
          <h3 className="saveProductsTitle">Previwe Orders</h3>
          <table className="saveProductsTable">
            <tr className="saveProductsTr">
            <th className="saveProductsTh">OrderID</th>
              <th className="saveProductsTh">Chemical Name</th>
              <th className="saveProductsTh">Quantity</th>
              <th className="saveProductsTh">CAS Number</th>
              <th className="saveProductsTh">Importance Type</th>
              <th className="saveProductsTh">Vendor Name</th>
              <th className="saveProductsTh">Order Status</th>
              <th className="saveProductsTh">Product Details</th>
            </tr>
            <tr className="saveProductsTr">
              <td className="saveProductsUser">
                <span className="saveProductsName">210920210001</span>
              </td>
              <td className="saveProductsDate">Hydrogen</td>
              <td className="saveProductsAmount">25 kg</td>
              <td className="saveProductsStatus">CAS 001</td>
              <td className="saveProductsDate">A</td>
              <td className="saveProductsAmount">Arcnas</td>
              <td className="saveProductsStatus">
                <Button type="Approved" />
              </td>
              <td className="saveProductsAmount">Gaseous state </td>
            </tr>
          </table>
        </div>
      )
}
