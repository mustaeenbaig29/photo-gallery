import React, { useState } from 'react';
import './Navbar.css';
import { FaBars } from 'react-icons/fa';
import {  useNavigate } from 'react-router-dom';
import NavbarLogo from './NavbarLogo';
import NavbarLinks from './NavbarLinks';
import NavbarSearchbox from './NavbarSearchbox';

const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  const handleSearchAndRedirect = () => {
    if (searchQuery) {
      navigate(`/gallery?query=${searchQuery}`);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearchAndRedirect();
    }
  };

  return (
    <nav className='navbar'>
      <NavbarLogo />
      <NavbarLinks isNavOpen={isNavOpen} />
      <NavbarSearchbox
        searchQuery={searchQuery}
        setSearchQuery={(value) => setSearchQuery(value)}
        handleKeyPress={handleKeyPress}
        handleSearchAndRedirect={handleSearchAndRedirect}
      />
      <div className='navbar_icon' onClick={toggleNav}>
        <FaBars />
      </div>
    </nav>
  );
};

export default Navbar;
