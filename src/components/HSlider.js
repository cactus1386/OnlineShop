import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap';
import img1 from '../assets/media/slider/SM1.jpg'
import img2 from '../assets/media/slider/SM2.jpg'
import img3 from '../assets/media/slider/SM3.jpg'
import img4 from '../assets/media/slider/SM4.png'



function ImageSlider () {
  const [state,setState]=useState([
    {Image:img1},
    {Image:img2},
    {Image:img3},
    {Image:img4},
  ])
  return (
    <div class="container-xl">
      <Carousel>
      {state.map(c=><Carousel.Item>
          <img className="d-block w-100" src={c.Image} alt="Third slide" />
        </Carousel.Item>
      )}
      </Carousel>
      </div>
  );
};

export default ImageSlider;
