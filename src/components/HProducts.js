import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const HomeProducts = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const myHeaders = new Headers();
      myHeaders.append("accept", "application/json");
      myHeaders.append("X-CSRFToken", "D49DG2Se4yJkKYaS0MtoOHpApCDvygadfKNuDeUJAqndhGVnxAs7YEtxHGqjS6H6");

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
      };

      try {
        const response = await fetch("http://94.183.74.154:1234/api/v1/products/", requestOptions);
        const result = await response.json();
        const sortedData = sortProductsByCategory(result.results);
        setCategories(sortedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProducts();
  }, []);

  const sortProductsByCategory = (products) => {
    const categories = {
      't-shirt': [],
      'pant': [],
      'socks': [],
      'coat': []
    };

    products.forEach(product => {
      product.category.forEach(category => {
        if (categories[category]) {
          categories[category].push(product);
        }
      });
    });

    return Object.keys(categories).map(categoryName => ({
      Name: categoryName,
      Products: categories[categoryName].slice(0, 5) // Show only up to 5 products
    }));
  };

  return (
<<<<<<< HEAD
    <div className="container-xl fontv" dir="rtl">
      {categories.map(category => (
        <div className="pt-3" key={category.Name}>
          <div className="row border shadow bg-white rounded">
            <div className='crad-title border-bottom border-dark pt-3'>
              <h2 className="fontv">{category.Name}</h2>
            </div>
            <div className="crad-title">
              <div className="d-flex justify-content-end">
                <a className="btn hover" href="products">مشاهده همه</a>
              </div>
=======
    <div className="container-xl fontv  " dir="rtl">
      {Categories.map(e =>
        <div class="pt-3">
        <div className="row border shadow  bg-white rounded ">
          <div className='crad-title border-bottom border-dark pt-3 '>
            <h2 class ='fontv'>{e.Name}</h2>
          </div>
          <div className="crad-title">
            <div className="d-flex justify-content-end"><a className="btn hover" href="products">مشاهده همه</a></div>
          </div>  
          {e.Products.map(c => ( // Removed unnecessary curly braces around e.Products
            <div className="col card border-bottom-0 border-top-0" key={c.id} > {/* Added key prop to the outer div */}
              <a href="/pi">
                <div className="product-list">
                  <div className="product-item">
                    <img src={c.Image} alt={c.Name} className="product-image" />
                    <h2 className="product-name">{c.Name}</h2>
                    <p className="product-price">${c.Price}</p>
                  </div>
                </div>
                </a>
>>>>>>> 4e8afc580353213825dee7081f35fb3cd541c4fd
            </div>
            {category.Products.map(product => (
              <div className="col card border-bottom-0 border-top-0" key={product.id}>
                <div className="product-list">
                  <div className="product-item">
                    <img src={product.pic} alt={product.name} className="product-image" />
                    <h2 className="product-name">{product.name}</h2>
                    <p className="product-price">${product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeProducts;
