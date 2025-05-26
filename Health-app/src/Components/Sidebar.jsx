import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt, faHistory, faCalendar, faStethoscope,
  faChartBar, faComments, faLifeRing, faCog,
  faBars, faTimes
} from '@fortawesome/free-solid-svg-icons';

const links = [
  { name: 'Dashboard', icon: faTachometerAlt },
  { name: 'History', icon: faHistory },
  { name: 'Calendar', icon: faCalendar },
  { name: 'Appointments', icon: faStethoscope },
  { name: 'Statistics', icon: faChartBar },
  { name: 'Chat', icon: faComments },
  { name: 'Support', icon: faLifeRing },
  { name: 'Setting', icon: faCog },
];

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
  
      <div className="menu-toggle" onClick={() => setIsOpen(true)}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2 className="logo">Health<span>care.</span></h2>
          <FontAwesomeIcon icon={faTimes} className="close-icon" onClick={() => setIsOpen(false)} />
        </div>
        <ul>
          {links.map(link => (
            <li key={link.name}>
              <FontAwesomeIcon icon={link.icon} /> <span>{link.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
