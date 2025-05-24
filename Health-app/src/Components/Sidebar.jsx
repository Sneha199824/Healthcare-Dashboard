import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCalendar, faChartBar, faTooth, faHeartbeat } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Health App</h2>
      <ul>
        <li><a href="#dashboard"><FontAwesomeIcon icon={faHome} />Dashboard</a></li>
        <li><a href="#profile"><FontAwesomeIcon icon={faHome} />Profile</a></li>
        <li><a href="#settings"><FontAwesomeIcon icon={faHome} />Settings</a></li>
        <li><a href="#logout"><FontAwesomeIcon icon={faHome} />Logout</a></li>
      </ul>
    </div>
  );
}
export default Sidebar;