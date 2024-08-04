import React, { useState } from 'react';
import Filter from './Filter';
import ShoppingListItems from './ShoppingListItems';

const ShoppingList = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const items = [
    { id: 1, name: 'Apple', category: 'Fruits' },
    { id: 2, name: 'Banana', category: 'Fruits' },
    { id: 3, name: 'Carrot', category: 'Vegetables' },
    { id: 4, name: 'Mutton', category: 'Meat' },
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredItems = items.filter((item) => {
    if (selectedCategory === '') {
      return true;
    }
    return item.category === selectedCategory;
  });

  return (
    <div>
      <h1>Shopping List</h1>
      <Filter value={selectedCategory} onChange={handleCategoryChange} />
      <ShoppingListItems items={filteredItems} />
    </div>
  );
};

export default ShoppingList;