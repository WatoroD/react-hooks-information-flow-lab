import React, { useState } from "react";
import Header from './Header';
import ShoppingList from './ShoppingList';
import itemData from '../data/items';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) =>!isDarkMode);
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  return (
    <div className={"App " + (isDarkMode? "dark" : "light")}>
      <Header onDarkModeClick={onDarkModeClick} />
      <ShoppingList items={itemData} selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
    </div>
  );
}

export default App;