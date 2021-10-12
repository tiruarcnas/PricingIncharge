import './widgetLg.css';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import axios from 'axios';
class WidgetLg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: [],
    };
  }
  componentDidMount() {
    axios.get('http://localhost:9000/api/orderget').then((res) => {
      console.log(res);
      this.setState({ order: res.data });
    });
  }
  render() {
    const Button = ({ type }) => {
      return <button className={'widgetLgButton ' + type}>{type}</button>;
    };
    var data = this.state.order;
    return (
      <div className="widgets">
        <h3 className="widgetLgTitle">ActiveOrders</h3>
        <div className="widgetLg">
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
            {data.length > 0
              ? data.map((user, i) => {
                  return (
                    <tbody>
                      <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                          <span className="widgetLgName">{user._id}</span>
                        </td>
                        <td className="widgetLgDate">{user.ProductName}</td>
                        <td className="widgetLgAmount">{user.PackSize}</td>
                        <td className="widgetLgStatus">{user.CASNumber}</td>
                        <td className="widgetLgDate">{user.ImportanceType}</td>
                        <td className="widgetLgAmount">{user.VendorName}</td>
                        <td className="widgetLgStatus">
                          <Button type={user.Status} />
                        </td>
                        <td className="widgetLgAmount">Gaseous state </td>
                      </tr>
                    </tbody>
                  );
                })
              : null}
          </table>
          {/* <button className="widgetLgbutton"> View More </button> */}
          <Link to="/products">
            <button className="widgetLgbutton"> View More </button>
          </Link>
        </div>
      </div>
    );
  }
}
export default WidgetLg;
