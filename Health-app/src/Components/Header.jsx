import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className="header">
      <div className="search-box">
        <FontAwesomeIcon icon={faSearch} className="icon" />
        <input type="text" placeholder="Search" />
      </div>
      <div className="header-right">
        <FontAwesomeIcon icon={faBell} className="icon bell" />
        <img src="/avatar.png" alt="User" className="avatar" />
      </div>
    </div>
  );
}

export default Header;
