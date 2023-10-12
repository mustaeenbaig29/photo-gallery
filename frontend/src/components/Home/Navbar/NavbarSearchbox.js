import React from 'react';

const NavbarSearchbox = ({
  searchQuery,
  setSearchQuery,
  handleKeyPress,
  handleSearchAndRedirect,
}) => {
  return (
    <div className='navbar_searchbox'>
      <input
        type='text'
        placeholder='Search'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default NavbarSearchbox;
