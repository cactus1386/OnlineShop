import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import img1 from '../assets/media/products/1.png';
import img2 from '../assets/media/products/2.png';
import img3 from '../assets/media/products/3.png';
import img4 from '../assets/media/products/4.png';
import img5 from '../assets/media/products/5.png';
import img6 from '../assets/media/products/6.png';
import img7 from '../assets/media/products/7.png';
import img8 from '../assets/media/products/8.png';
import img9 from '../assets/media/products/9.png';

function HomeProducts() {
  const [Eproduct, setState1] = useState([
    { id: 1, Name: 'Product 1', Price: 10, Image: img1 },
    { id: 2, Name: 'Product 2', Price: 20, Image: img2 },
    { id: 3, Name: 'Product 3', Price: 30, Image: img3 },
    { id: 2, Name: 'Product 2', Price: 20, Image: img2 },
    { id: 3, Name: 'Product 3', Price: 30, Image: img3 },
  ]);

  const [Sproduct, setState2] = useState([
    { id: 4, Name: 'Product 4', Price: 40, Image: img4 },
    { id: 5, Name: 'Product 5', Price: 50, Image: img5 },
    { id: 6, Name: 'Product 6', Price: 60, Image: img6 },
    { id: 5, Name: 'Product 5', Price: 50, Image: img5 },
    { id: 6, Name: 'Product 6', Price: 60, Image: img6 },
  ]);

  const [Cproduct, setState3] = useState([
    { id: 7, Name: 'Product 7', Price: 70, Image: img7 },
    { id: 8, Name: 'Product 8', Price: 80, Image: img8 },
    { id: 9, Name: 'Product 9', Price: 90, Image: img9 },
    { id: 8, Name: 'Product 8', Price: 80, Image: img8 },
    { id: 9, Name: 'Product 9', Price: 90, Image: img9 },
  ]);

  const [Categories, setCategories] = useState([
    { Name: 'الکترونیک', Products: Eproduct }, 
    { Name: 'لوازم خانگی', Products: Sproduct }, 
    { Name: 'لباس', Products: Cproduct }, 
  ]);

  return (
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
            <div className="col card border-bottom-0 border-top-0" key={c.id}> {/* Added key prop to the outer div */}
              <div className="product-list">
                <div className="product-item">
                  <img src={c.Image} alt={c.Name} className="product-image" />
                  <h2 className="product-name">{c.Name}</h2>
                  <p className="product-price">${c.Price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      )}
    </div>
  );
}
// ..

export default HomeProducts;
