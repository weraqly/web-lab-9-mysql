import React, { useState, useEffect } from 'react';
import FilterBar from '../filter/filter.jsx';
import { fetchEquipments } from '../server/api.js';
import './catalog.css';
import { Link } from 'react-router-dom';

const CatalogPage = () => {
  const [equipments, setEquipments] = useState([]);
  const [filters, setFilters] = useState({ category: '', priceRange: '', brand: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadEquipments = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchEquipments(filters);
      setEquipments(data);
    } catch (err) {
      setError('Failed to fetch equipments');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEquipments();
  }, [filters]);

  const handleApplyFilters = (newFilters) => {
    setFilters(newFilters);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="catalog-page">
      <FilterBar onApplyFilters={handleApplyFilters} />
      {equipments.length === 0 ? (
        <p>No items found</p>
      ) : (
        <div className="image-grid">
          {equipments.map((item) => (
            <div key={item.id} className="image-container">
              {item.photo && <img src={item.photo} alt={item.title} />}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>{item.price} €</p>
              <Link to={`/item/${item.id}`}>
                <button>View more</button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>

  );
};

export default CatalogPage;
