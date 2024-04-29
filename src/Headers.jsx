// Header.jsx

import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';

function Header({ handleLogout }) {
  return (
    <header className="sidebar-header">
      <div className="logout-icon" onClick={handleLogout}>
        <BsFillPersonFill />
      </div>
    </header>
  );
}

export default Headers;
