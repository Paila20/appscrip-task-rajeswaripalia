import React from 'react';
import './ProductGrid.css';

const ProductGrid = ({ products,showFilter }) => {
  return (
    <div className={`grid-container ${!showFilter ? 'filter-hidden' : ''}`}>
      {products.map((product) => (
        <div key={product.id} className="grid-item">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
