import React from 'react';

const Header = ({ checkoutCount }) => {
  return (
    <div className='header'>
      <h1>My Shopping Site</h1>
      {checkoutCount > 0 && <h2>Checkout items: {checkoutCount}</h2>}
    </div>
  );
};

export default Header;
