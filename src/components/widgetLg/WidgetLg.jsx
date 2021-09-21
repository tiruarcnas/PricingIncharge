import "./widgetLg.css";

export default function WidgetLg() {
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
            {/* <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            /> */}
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
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
