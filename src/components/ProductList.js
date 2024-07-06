import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/ProductList.css';
import '../assets/css/images.css';
import Filter from './Filter';


const ProductList = () => {
  const [detail,setDetail]=useState([])


const myHeaders = new Headers();
myHeaders.append("accept", "application/json");
myHeaders.append("X-CSRFToken", "qCdvOcutqzq4fiC46AUlncnkbeyh8L7WCj2Ydrn0Mz1GJlKEkPl106VJwf3PE67l");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("http://94.183.74.154:1234/api/v1/products/", requestOptions)
  .then((response) => response.json())
  .then((result) => setDetail(result.results))
  .then((result) => console.log(result))
  .catch((error) => console.error(error));




 
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

  const filteredProducts = detail.filter((product) => {
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMinPrice = minPrice === '' || product.price >= parseFloat(minPrice);
    const matchesMaxPrice = maxPrice === '' || product.price <= parseFloat(maxPrice);
    const matchesCategory = category === '' || product.category.includes(category);

    return matchesSearchTerm && matchesMinPrice && matchesMaxPrice && matchesCategory;
  });
  return (
    <div className="container-fluid">
      <div className="row" >
        <div className="col-lg-9 col-md-10 col-sm-12 order-sm-2 order-md-1" >
        <div class="col-md-12">
          <div className="row " dir="rtl">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-item col-md-3 pt-3  fontv ">
                <div class="card">
                  <img src={product.pic} alt={product.name} className="product-image imgs" />
                  <div class="text-muted">{product.category}</div>
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
