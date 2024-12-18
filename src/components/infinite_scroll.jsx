import React from 'react';
import './infinite_scroll.css';

const InfiniteCarousel = () => {
    const items = [
      'AI', 'Blender', 'Substance Designer', 'Game Design', 'Photoshop', 'UX', 'React', 'Machine Learning', 'Deep Learning', 'Homework'
    ];
  
    return (
      <div className="carousel-container">
        <div className="carousel">
          {items.map((item, index) => (
            <h3 key={index} className="carousel-item">{item}</h3>
          ))}
          {items.map((item, index) => (
            <h3 key={index + items.length} className="carousel-item">{item}</h3>
          ))}
        </div>
      </div>
    );
  };
  
  export default InfiniteCarousel;