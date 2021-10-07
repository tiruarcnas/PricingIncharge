import './sidebar.css';
import HomeIcon from '@material-ui/icons/Home';
import ListAltIcon from '@material-ui/icons/ListAlt';
import RestoreIcon from '@material-ui/icons/Restore';
import FastRewindIcon from '@material-ui/icons/FastRewind';
import AlarmIcon from '@material-ui/icons/Alarm';
import SaveIcon from '@material-ui/icons/Save';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/home" className="link">
              <li className="sidebarListItem active">
                <HomeIcon className="sidebarIcon" />
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
                <ListAltIcon className="sidebarIcon" />
                CreateOrders
              </li>
            </Link>
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <SaveIcon className="sidebarIcon" />
                SavedOrders
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <RestoreIcon className="sidebarIcon" />
                ActiveOrders
              </li>
            </Link>
            <Link to="/saveproducts" className="link">
              <li className="sidebarListItem">
                <FastRewindIcon className="sidebarIcon" />
                PreviewsOrders
              </li>
            </Link>
            <Link to="/newproduct" className="link">
              <li className="sidebarListItem">
                <AlarmIcon className="sidebarIcon" />
                Set Reminders
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
