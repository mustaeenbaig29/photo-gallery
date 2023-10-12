import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarLinks = ({ isNavOpen }) => {
  return (
    <div className={`navbar_links ${isNavOpen ? 'open' : ''}`}>
      <div className='navbar_link'>
        <NavLink to='/'>Home</NavLink>
      </div>
      <div className='navbar_link'>
        <NavLink to='/gallery'>Gallery</NavLink>
      </div>
    </div>
  );
};

export default NavbarLinks;
