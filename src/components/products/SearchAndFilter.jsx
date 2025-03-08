import React from "react";
import { getUniqueStores } from "../../utils/helpers";

const SearchAndFilter = ({ products, onSearch, onFilter }) => {
  const uniqueStores = getUniqueStores(products);

  return (
    <div className="flex gap-4 mb-6">
      {/* Search by Name */}
      <input
        type="text"
        placeholder="Search by name..."
        onChange={(e) => onSearch(e.target.value)}
        className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Filter by Store */}
      <select
        onChange={(e) => onFilter(e.target.value)}
        className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">All Stores</option>
        {uniqueStores.map((store) => (
          <option key={store} value={store}>
            {store}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchAndFilter;