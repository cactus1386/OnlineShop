import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Product(){

    return ( 

        <div class="col-md-2 col-xxl-2 col-lg-2">
         <div class="card card-custom card-shadowless">
            <div class="card-body p-0">
               
                <div class="overlay">
                    <div class="overlay-wrapper rounded bg-light text-center">
                        <img src="assets/media/products/1.png" alt="" class="mw-100 w-200px"/>
                    </div>
                    <div class="overlay-layer">
                        <a href="#" class="btn font-weight-bolder btn-sm btn-primary mr-2">Quick View</a>
                        <a href="#" class="btn font-weight-bolder btn-sm btn-light-primary">Purchase</a>
                    </div>
                </div>
              
                <div class="text-center mt-5 mb-md-0 mb-lg-5 mb-md-0 mb-lg-5 mb-lg-0 mb-5 d-flex flex-column">
                    <a href="#" class="font-size-h5 font-weight-bolder text-dark-75 text-hover-primary mb-1">Smart Watches</a>
                    <span class="font-size-lg">Outlines keep poorly thought</span>
                </div>
             </div>
        </div>
     </div>
     )

}

export default Product;