import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/plugins/global/plugins.bundle.css'
import '../assets/plugins/custom/prismjs/prismjs.bundle.css'
import '../assets/css/style.bundle.css'
import '../assets/css/pages/login/login-1.css'
import ask1 from '../assets/media/books/1.png'
import ask2 from '../assets/media/books/2.png'
import ask3 from '../assets/media/books/3.png'
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../../src/App.css'
function ProductImg(){

    return ( 

<div id="demo" className="carousel slide col-md-12" data-ride="carousel" >

 <ul className="carousel-indicators">
  <li data-target="#demo" data-slide-to="0" className="active"></li>
  <li data-target="#demo" data-slide-to="1"></li>
  <li data-target="#demo" data-slide-to="2"></li>
</ul>

<div className="carousel-inner">
  <div className="carousel-item active">
    <img src={ask1} alt="Los Angeles" width="600" height="400"></img>
  </div>
  <div className="carousel-item">
    <img src={ask2} alt="Chicago" width="600" height="400"></img>
  </div>
  <div className="carousel-item">
    <img src={ask3} alt="New York" width="600" height="400"></img>
  </div>
</div>

 <a className="carousel-control-prev" href="#demo" data-slide="prev">
  <span className="carousel-control-prev-icon"></span>
</a>
<a className="carousel-control-next" href="#demo" data-slide="next">
  <span className="carousel-control-next-icon"></span>
</a>
</div>
     )

}

export default ProductImg;