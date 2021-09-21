import "./sidebar.css";
import {
  LineStyle,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/newUser" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                CreateOrders
              </li>
            </Link>
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                SavedOrders
              </li>
            </Link>
            <Link to="/products"  className="link">
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              ActiveOrders
            </li>
            </Link>
            <Link to="/users" className="link">
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              PreviewsOrders
            </li>
            </Link>
            <Link to="/newproduct" className="link">
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Set Reminders
            </li>
            </Link>
          </ul>
        </div>
       
        </div>
    </div>
  );
}
