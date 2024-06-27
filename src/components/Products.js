import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/plugins/global/plugins.bundle.css'
import '../assets/plugins/custom/prismjs/prismjs.bundle.css'
import '../assets/css/style.bundle.css'
import '../assets/css/pages/login/login-1.css'
import mypic from '../assets/media/products/12.png'

function ProductInfo(){
    return (
        <div class="card card-custom gutter-b">
            <div class="card-body d-flex rounded bg-danger p-12 flex-column flex-md-row flex-lg-column flex-xxl-row">
            <div class="bgi-no-repeat bgi-position-center bgi-size-cover h-300px h-md-auto h-lg-300px h-xxl-auto mw-100 w-550px" style={{ backgroundImage:  "url("+mypic+")"}}  ></div>
            <div class="card card-custom w-auto w-md-300px w-lg-auto w-xxl-300px ml-auto">
                <div class="card-body px-12 py-10">
                    <h3 class="font-weight-bolder font-size-h2 mb-1">
                        <a href="#" class="text-dark-75">Nike True Balance</a>
                    </h3>
                    <div class="text-primary font-size-h4 mb-9">$ 399.99</div>
                    <div class="font-size-sm mb-8">Outlines keep you honest. They stop you from indulging in poorly ought out metaphorsy about driving and keep you focused one the overall structure of your post</div>
                    <div class="d-flex mb-3">
                        <span class="text-dark-50 flex-root font-weight-bold">Shoes Brand</span>
                        <span class="text-dark flex-root font-weight-bold">Nike</span>
                    </div>
                    <div class="d-flex mb-3">
                        <span class="text-dark-50 flex-root font-weight-bold">SKU</span>
                        <span class="text-dark flex-root font-weight-bold">NF3535</span>
                    </div>
                    <div class="d-flex mb-3">
                        <span class="text-dark-50 flex-root font-weight-bold">Color</span>
                        <span class="text-dark flex-root font-weight-bold">White</span>
                    </div>
                    <div class="d-flex mb-3">
                        <span class="text-dark-50 flex-root font-weight-bold">Collection</span>
                        <span class="text-dark flex-root font-weight-bold">2020 Spring</span>
                    </div>
                    <div class="d-flex">
                        <span class="text-dark-50 flex-root font-weight-bold">In Stock</span>
                        <span class="text-dark flex-root font-weight-bold">280</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ProductInfo;