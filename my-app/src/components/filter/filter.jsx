import React, { useState } from 'react';
import './filter.css';

const FilterBar = ({ onApplyFilters }) => {
  const [localFilters, setLocalFilters] = useState({
    category: '',
    priceRange: '',
    brand: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLocalFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleApplyFilters = () => {
    onApplyFilters(localFilters);
  };

  return (
    <section id="filter_section">
      <div className="filter-bar">
        <select
          className="filter-select"
          name="category"
          value={localFilters.category}
          onChange={handleChange}
        >
          <option value="">Category</option>
          <option value="backpacks">Backpacks</option>
          <option value="bottles">Bottles</option>
          <option value="socks">Socks</option>
          <option value="jackets">Jackets</option>
        </select>

        <select
          className="filter-select"
          name="priceRange"
          value={localFilters.priceRange}
          onChange={handleChange}
        >
          <option value="">Price Range</option>
          <option value="0-20">€0 - €20</option>
          <option value="20-50">€20 - €50</option>
          <option value="50-100">€50 - €100</option>
          <option value="100-200">€100 - €200</option>
        </select>

        <select
          className="filter-select"
          name="brand"
          value={localFilters.brand}
          onChange={handleChange}
        >
          <option value="">Brand</option>
          <option value="brand1">Brand 1</option>
          <option value="brand2">Brand 2</option>
          <option value="brand3">Brand 3</option>
        </select>
      </div>
      <div className="second_part">
        <button className="filter-button" onClick={handleApplyFilters}>
          Apply Filters
        </button>
      </div>
    </section>
  );
};

export default FilterBar;
