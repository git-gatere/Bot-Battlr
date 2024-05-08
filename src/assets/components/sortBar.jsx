import React from 'react';

function SortBar({ onSort }) {
  const handleSortByHealth = () => {
    onSort('health');
  };

  return (
    <div className="sort-bar">
      <button onClick={handleSortByHealth}>Sort by Health</button>
    </div>
  );
}

export default SortBar;