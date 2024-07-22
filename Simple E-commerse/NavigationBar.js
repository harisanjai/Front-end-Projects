import React from 'react';

const NavigationBar = ({ onSelectCategory }) => {
  const categories = ['Category 1', 'Category 2', 'Category 3'];

  return (
    <div className='navigation'>
      {categories.map((category, index) => (
        <h2 key={index} onClick={() => onSelectCategory(category)}>
          {category}
        </h2>
      ))}
    </div>
  );
};

export default NavigationBar;