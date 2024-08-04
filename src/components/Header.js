import React from 'react';

const Header = ({ onDarkModeClick }) => {
  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={onDarkModeClick}>
        Toggle Dark Mode
      </button>
    </header>
  );
};

export default Header;