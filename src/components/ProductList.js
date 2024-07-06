import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/ProductList.css';
import '../assets/css/images.css';
import Filter from './Filter';

const ProductList = () => {
  const [detail, setDetail] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      const myHeaders = new Headers();
      myHeaders.append("accept", "application/json");
      myHeaders.append("X-CSRFToken", "AmrdKuP98ULWK4LXWttdeKR7sbq8MXasc254HGREEMpPhMwsthsWoHV4KfdW6NHl");

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
      };

      try {
        const response = await fetch("http://94.183.74.154:1234/api/v1/products/", requestOptions);
        const result = await response.json();
        setDetail(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleFilterChange = (filters) => {
    setSearchTerm(filters.searchTerm);
    setMinPrice(filters.minPrice);
    setMaxPrice(filters.maxPrice);
    setCategory(filters.category);
  };

  const filteredProducts = detail.filter((product) => {
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMinPrice = minPrice === '' || product.price >= parseFloat(minPrice);
    const matchesMaxPrice = maxPrice === '' || product.price <= parseFloat(maxPrice);
    const matchesCategory = category === '' || product.category.includes(category);

    return matchesSearchTerm && matchesMinPrice && matchesMaxPrice && matchesCategory;
  });

  const groupedProducts = filteredProducts.reduce((acc, product) => {
    const cat = product.category[0];
    if (!acc[cat]) {
      acc[cat] = [];
    }
    acc[cat].push(product);
    return acc;
  }, {});

  const displayedProducts = Object.values(groupedProducts).flatMap(products =>
    products.slice(0, 5)
  );

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-9 col-md-10 col-sm-12 order-sm-2 order-md-1">
          <div className="col-md-12">
            <div className="row" dir="rtl">
              {displayedProducts.map((product) => (
                <div key={product.id} className="product-item col-md-3 pt-3 fontv">
                  <div className="card">
                    <img src={product.pic} alt={product.name} className="product-image imgs" />
                    <div className="text-muted">{product.category.join(', ')}</div>
                    <h2 className="product-name fontv">{product.name}</h2>
                    <p className="product-price">${product.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-2 col-sm-12 order-sm-1 order-md-2">
          <Filter onFilterChange={handleFilterChange} />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
