import React, { useState } from 'react';
import './other.css'; 
import ViewButton from '../view_button/view_button.jsx';

const Other_section = () => {

  const allItems = [
    { id: 1, src: "/img/IMG_2937.JPG", alt: "Commercial Jet", name: "Tent" },
    { id: 2, src: "/img/IMG_2938.JPG", alt: "Regional Aircraft", name: "Backpack" },
    { id: 3, src: "/img/IMG_2939.JPG", alt: "Cargo Plane", name: "Row" },
    { id: 4, src: "/img/IMG_2937.JPG", alt: "Commercial Jet", name: "Tent" },
    { id: 5, src: "/img/IMG_2938.JPG", alt: "Regional Aircraft", name: "Backpack" },
    { id: 6, src: "/img/IMG_2939.JPG", alt: "Cargo Plane", name: "Row" },
    { id: 7, src: "/img/IMG_2937.JPG", alt: "Commercial Jet", name: "Tent" },
    { id: 8, src: "/img/IMG_2938.JPG", alt: "Regional Aircraft", name: "Backpack" },
    { id: 9, src: "/img/IMG_2939.JPG", alt: "Cargo Plane", name: "Row" },
  ];

  const [items, setItems] = useState(allItems.slice(0, 3)); // початкові елементи
  const [currentIndex, setCurrentIndex] = useState(3); 

  const addMoreItems = () => {

    if (currentIndex >= allItems.length) {
      alert("У каталозі більше товарів! Перейдіть туди, щоб побачити повний асортимент.");
      return;
    }

    const nextItems = allItems.slice(currentIndex, currentIndex + 3);
    setItems([...items, ...nextItems]);
    setCurrentIndex(currentIndex + 3);
  };

  return (
    <section id="other_s">
      <h2 id="more_information">Here are some products from our shop</h2>
      <div className="image-row">
        {items.map(item => (
          <div key={item.id} className="image-containerr">
            <img 
              src={item.src} 
              alt={item.alt} 
              className="other-immage"
            />
            <p className='el_name'>{item.name}</p>
          </div>
        ))}
      </div>
      <ViewButton onClick={addMoreItems} /> 
      <div className="image_container_fog">
        <img 
          src="/img/IMG_2202.jpg" 
          alt="placeholder" 
          className="imagee" 
        />
      </div>
    </section>
  );
};

export default Other_section;
