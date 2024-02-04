import React from 'react';

const Header = ({ headerContent}) => {
  return (
    <header className="p-8 text-center main_head">
      <h1 className="text-3xl font-bold mb-4">
        {headerContent[0].attributes.Title}
      </h1>
      <p className="text-lg">{headerContent[0].attributes.description}</p>
    </header>
  );
};

export default Header;
