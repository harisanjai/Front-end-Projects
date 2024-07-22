import React, { useState } from 'react';

const Content = ({ category, setCheckoutCount }) => {
  const [checkoutItems, setCheckoutItems] = useState([]);

  const itemRanges = {
    'Category 1': [1, 2, 3, 4, 5],
    'Category 2': [6, 7, 8, 9, 10],
    'Category 3': [11, 12, 13, 14, 15],
  };

  const handleAddItem = (item) => {
    const newItems = [...checkoutItems, { category, itemId: item }];
    setCheckoutItems(newItems);
    setCheckoutCount(newItems.length);
  };

  const handleRemoveItem = (item) => {
    const newItems = checkoutItems.filter(i => i.itemId !== item);
    setCheckoutItems(newItems);
    setCheckoutCount(newItems.length);
  };

  const items = itemRanges[category] || [];

  return (
    <div className='content'>
      <h2>{category}</h2>
      {checkoutItems.length === 0 && <h3>No items checked out</h3>}
      <div className='item-list'>
        {items.map(item => (
          <div key={item} className='item'>
            <span>Item {item}</span>
            <div className='button-div'>
              <button onClick={() => handleAddItem(item)}>+</button>
              <button onClick={() => handleRemoveItem(item)}>-</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
