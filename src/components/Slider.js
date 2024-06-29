// src/components/Slider.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import slide1 from '../assets/media/slider/1.jpg'
import slide2 from '../assets/media/slider/1.jpg';
import slide3 from '../assets/media/slider/1.jpg';
import '../assets/css/Slider.css';



const Slider = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide full-height-carousel" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={slide1} className="d-block w-75 mx-auto" alt="Slide 1" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Slide 1 Title</h5>
            <p>Slide 1 Description</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={slide2} className="d-block w-75 mx-auto" alt="Slide 2" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Slide 2 Title</h5>
            <p>Slide 2 Description</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={slide3} className="d-block w-75 mx-auto" alt="Slide 3" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Slide 3 Title</h5>
            <p>Slide 3 Description</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
