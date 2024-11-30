import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEquipments } from '../server/api.js';
import Operation from '../operation/operation.jsx';
import Loader from '../loader/loader.jsx';
import './item.css';

const ItemPage = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadItem = async () => {
      try {
        setLoading(true);
        setError(null);

        const equipments = await fetchEquipments(); // Отримання всіх елементів
        const foundItem = equipments.find((equipment) => equipment.id === parseInt(itemId)); // Пошук потрібного елемента

        if (!foundItem) throw new Error('Item not found');
        setItem(foundItem);
      } catch (err) {
        console.error('Error loading item:', err.message || err);
        setError(err.message || 'Failed to fetch item');
      } finally {
        setLoading(false);
      }
    };

    loadItem();
  }, [itemId]);

  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;
  if (!item) return <p>Item not found</p>;

  return (
    <>
      <div className="item_section">
        <div className="item_view">
          <img src={item.photo} alt={item.title} className="item-image" />
        </div>
        <div className="item-details">
          <div className="naming_element">
            <h1 id="name_element">{item.title}</h1>
            <p>{item.description}</p>
            <p>Category: {item.category}</p>
            <p>Brand: {item.brand}</p>
          </div>
        </div>
      </div>
      <Operation price={item.price} />
    </>
  );
};

export default ItemPage;
