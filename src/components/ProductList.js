import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/ProductList.css';
import img1 from '../assets/media/products/1.png';
import img2 from '../assets/media/products/2.png';
import img3 from '../assets/media/products/3.png';
import img4 from '../assets/media/products/4.png';
import img5 from '../assets/media/products/5.png';
import img6 from '../assets/media/products/6.png';
import img7 from '../assets/media/products/7.png';
import img8 from '../assets/media/products/8.png';
import img9 from '../assets/media/products/9.png';
import Filter from './Filter';

const products = [
  { id: 1, name: 'Product 1', price: 10, image: img1 },
  { id: 2, name: 'Product 2', price: 20, image: img2 },
  { id: 3, name: 'Product 3', price: 30, image: img3 },
  { id: 4, name: 'Product 4', price: 40, image: img4 },
  { id: 5, name: 'Product 5', price: 50, image: img5 },
  { id: 6, name: 'Product 6', price: 60, image: img6 },
  { id: 7, name: 'Product 7', price: 70, image: img7 },
  { id: 8, name: 'Product 8', price: 80, image: img8 },
  { id: 9, name: 'Product 9', price: 90, image: img9 },
];

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [category, setCategory] = useState('');

  const handleFilterChange = (filters) => {
    setSearchTerm(filters.searchTerm);
    setMinPrice(filters.minPrice);
    setMaxPrice(filters.maxPrice);
    setCategory(filters.category);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMinPrice = minPrice === '' || product.price >= parseFloat(minPrice);
    const matchesMaxPrice = maxPrice === '' || product.price <= parseFloat(maxPrice);
    const matchesCategory = category === '' || product.category === category;

    return matchesSearchTerm && matchesMinPrice && matchesMaxPrice && matchesCategory;
  });

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-9 col-md-9 col-sm-12 order-sm-2 order-md-1">
          <div className="product-list">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-item">
                <img src={product.image} alt={product.name} className="product-image" />
                <h2 className="product-name">{product.name}</h2>
                <p className="product-price">${product.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 order-sm-1 order-md-2">
          <Filter onFilterChange={handleFilterChange} />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
