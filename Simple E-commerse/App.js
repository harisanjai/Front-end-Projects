import React, { useState } from 'react';
import Header from './Header';
import NavigationBar from './NavigationBar';
import Content from './Content';
import './App.css';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('Category 1');
  const [checkoutCount, setCheckoutCount] = useState(0);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className='app'>
      <Header checkoutCount={checkoutCount} />
      <div className='main'>
        <div className='sidebar'>
          <NavigationBar onSelectCategory={handleCategoryChange} />
        </div>
        <div className='content'>
          <Content category={selectedCategory} setCheckoutCount={setCheckoutCount} />
        </div>
      </div>
    </div>
  );
};

export default App;
