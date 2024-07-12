import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap';
import img1 from '../assets/media/slider/SM1.jpg'
import img2 from '../assets/media/slider/SM2.jpg'
import img3 from '../assets/media/slider/SM3.jpg'
import img4 from '../assets/media/slider/SM4.png'
import img5 from '../assets/media/slider/banner.jpg'
import '../assets/css/General.css';

function ImageSlider () {
  const [SliderPic,setSliderPic]=useState([])
  
const myHeaders = new Headers();
myHeaders.append("accept", "application/json");
myHeaders.append("authorization", "Basic YWRtaW5AYWRtaW4uY29tOjEyMw==");
myHeaders.append("X-CSRFToken", "lnVvAcE0UABBnOat2aJNCK1bYu5ToSnUfuhPRhz2yymKd6QVQhxScRKphbTUR0t5");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("http://94.183.74.154:1234/sliders/slider/", requestOptions)
  .then((response) => response.json())
  .then((result) => {setSliderPic(result);})
  .catch((error) => console.error(error));



  return (<div class="col-md-12 inline">
    <div class="container-fluid">
      <img class="w-100" src={img5}/>
    </div>
    <div class="container-fluid pt-4">
      <Carousel>
      {SliderPic.map(Pic=>
      <Carousel.Item>
          <img className="d-block w-100" src={Pic.image} />
        </Carousel.Item>
      )}
      </Carousel>
    </div>

  </div>);
};

export default ImageSlider;