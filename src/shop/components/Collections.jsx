import React from 'react';

const Collections = ({ fashion, onAdd }) => {
  return (
    <div className='collectionSection'>
      <h2>{fashion.title}</h2>
      <div className='imagesGrid'>
        {fashion.items.map((item, index) => (
          <div key={index} className='itemCard'>
            <img src={item.image} alt={item.name || fashion.title} />
            <p>{item.name}</p>
            <p>${item.price}</p>
            <button onClick={() => onAdd(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
