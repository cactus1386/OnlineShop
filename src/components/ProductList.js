import img1 from '../assets/media/products/1.png'
import img2 from '../assets/media/products/2.png'
import img3 from '../assets/media/products/3.png'
import img4 from '../assets/media/products/4.png'
import img5 from '../assets/media/products/5.png'
import img6 from '../assets/media/products/6.png'
import img7 from '../assets/media/products/7.png'
import img8 from '../assets/media/products/8.png'
import img9 from '../assets/media/products/9.png'

import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/plugins/global/plugins.bundle.css'
import '../assets/plugins/custom/prismjs/prismjs.bundle.css'
import '../assets/css/style.bundle.css'
import '../assets/css/pages/login/login-1.css'



function ProductList() {
    return (
        <div class="flex-row-fluid ml-lg-8">
        <div class="card card-custom card-stretch gutter-b">
            <div class="card-body">
                <div class="mb-11">
                    <div class="d-flex justify-content-between align-items-center mb-7">
                        <h2 class="font-weight-bolder text-dark font-size-h3 mb-0">Smart Devices</h2>
                        <a href="#" class="btn btn-light-primary btn-sm font-weight-bolder">View All</a>
                    </div>
                    <div class="row">
                        <div class="col-md-4 col-xxl-4 col-lg-12">
                            <div class="card card-custom card-shadowless">
                                <div class="card-body p-0">
                                    <div class="overlay">
                                        <div class="overlay-wrapper rounded bg-light text-center">
                                            <img src={img1} alt="" class="mw-100 w-200px" />
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
                        <div class="col-md-4 col-lg-12 col-xxl-4">
                            <div class="card card-custom card-shadowless">
                                <div class="card-body p-0">
                                    <div class="overlay">
                                        <div class="overlay-wrapper rounded bg-light text-center">
                                            <img src={img2} alt="" class="mw-100 w-200px" />
                                        </div>
                                        <div class="overlay-layer">
                                            <a href="#" class="btn font-weight-bolder btn-sm btn-primary mr-2">Quick View</a>
                                            <a href="#" class="btn font-weight-bolder btn-sm btn-light-primary">Purchase</a>
                                        </div>
                                    </div>
                                    <div class="text-center mt-5 mb-md-0 mb-lg-5 mb-md-0 mb-lg-5 mb-lg-0 mb-5 d-flex flex-column">
                                        <a href="#" class="font-size-h5 font-weight-bolder text-dark-75 text-hover-primary mb-1">Headphones</a>
                                        <span class="font-size-lg">Outlines keep poorly thought</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-lg-12 col-xxl-4">
                            <div class="card card-custom card-shadowless">
                                <div class="card-body p-0">
                                    <div class="overlay">
                                        <div class="overlay-wrapper rounded bg-light text-center">
                                            <img src={img3} alt="" class="mw-100 w-200px" />
                                        </div>
                                        <div class="overlay-layer">
                                            <a href="#" class="btn font-weight-bolder btn-sm btn-primary mr-2">Quick View</a>
                                            <a href="#" class="btn font-weight-bolder btn-sm btn-light-primary">Purchase</a>
                                        </div>
                                    </div>
                                    <div class="text-center mt-5 mb-md-0 mb-lg-5 mb-md-0 mb-lg-5 mb-lg-0 mb-5 d-flex flex-column">
                                        <a href="#" class="font-size-h5 font-weight-bolder text-dark-75 text-hover-primary mb-1">Smart Drones</a>
                                        <span class="font-size-lg">Outlines keep poorly thought</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-11">
                    <div class="d-flex justify-content-between align-items-center mb-7">
                        <h2 class="font-weight-bolder text-dark font-size-h3 mb-0">Best Wines</h2>
                        <a href="#" class="btn btn-light-primary btn-sm font-weight-bolder">View All</a>
                    </div>
                    <div class="row">
                        <div class="col-md-4 col-xxl-4 col-lg-12">
                            <div class="card card-custom card-shadowless">
                                <div class="card-body p-0">
                                    <div class="overlay">
                                        <div class="overlay-wrapper rounded bg-light text-center">
                                            <img src={img4} alt="" class="mw-100 w-200px" />
                                        </div>
                                        <div class="overlay-layer">
                                            <a href="#" class="btn font-weight-bolder btn-sm btn-primary mr-2">Quick View</a>
                                            <a href="#" class="btn font-weight-bolder btn-sm btn-light-primary">Purchase</a>
                                        </div>
                                    </div>

                                    <div class="text-center mt-5 mb-md-0 mb-lg-5 mb-md-0 mb-lg-5 mb-lg-0 mb-5 d-flex flex-column">
                                        <a href="#" class="font-size-h5 font-weight-bolder text-dark-75 text-hover-primary mb-1">Jerry Kane</a>
                                        <span class="font-size-lg">Outlines keep poorly thought</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-lg-12 col-xxl-4">
                            <div class="card card-custom card-shadowless">
                                <div class="card-body p-0">
                                    <div class="overlay">
                                        <div class="overlay-wrapper rounded bg-light text-center">
                                            <img src={img5} alt="" class="mw-100 w-200px" />
                                        </div>
                                        <div class="overlay-layer">
                                            <a href="#" class="btn font-weight-bolder btn-sm btn-primary mr-2">Quick View</a>
                                            <a href="#" class="btn font-weight-bolder btn-sm btn-light-primary">Purchase</a>
                                        </div>
                                    </div>

                                    <div class="text-center mt-5 mb-md-0 mb-lg-5 mb-md-0 mb-lg-5 mb-lg-0 mb-5 d-flex flex-column">
                                        <a href="#" class="font-size-h5 font-weight-bolder text-dark-75 text-hover-primary mb-1">Shiraz</a>
                                        <span class="font-size-lg">Outlines keep poorly thought</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-lg-12 col-xxl-4">
                            <div class="card card-custom card-shadowless">
                                <div class="card-body p-0">
                                    <div class="overlay">
                                        <div class="overlay-wrapper rounded bg-light text-center">
                                            <img src={img6} alt="" class="mw-100 w-200px" />
                                        </div>
                                        <div class="overlay-layer">
                                            <a href="#" class="btn font-weight-bolder btn-sm btn-primary mr-2">Quick View</a>
                                            <a href="#" class="btn font-weight-bolder btn-sm btn-light-primary">Purchase</a>
                                        </div>
                                    </div>

                                    <div class="text-center mt-5 mb-md-0 mb-lg-5 mb-md-0 mb-lg-5 mb-lg-0 mb-5 d-flex flex-column">
                                        <a href="#" class="font-size-h5 font-weight-bolder text-dark-75 text-hover-primary mb-1">Chardonnay</a>
                                        <span class="font-size-lg">Outlines keep poorly thought</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="d-flex justify-content-between align-items-center mb-7">
                        <h2 class="font-weight-bolder text-dark font-size-h3 mb-0">Popular Jackets</h2>
                        <a href="#" class="btn btn-light-primary btn-sm font-weight-bolder">View All</a>
                    </div>
                    <div class="row">
                        <div class="col-md-4 col-xxl-4 col-lg-12">
                            <div class="card card-custom card-shadowless">
                                <div class="card-body p-0">
                                    <div class="overlay">
                                        <div class="overlay-wrapper rounded bg-light text-center">
                                            <img src={img7} alt="" class="mw-100 w-200px" />
                                        </div>
                                        <div class="overlay-layer">
                                            <a href="#" class="btn font-weight-bolder btn-sm btn-primary mr-2">Tommy Hilfiger</a>
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
                        <div class="col-md-4 col-lg-12 col-xxl-4">
                            <div class="card card-custom card-shadowless">
                                <div class="card-body p-0">
                                    <div class="overlay">
                                        <div class="overlay-wrapper rounded bg-light text-center">
                                            <img src={img8} alt="" class="mw-100 w-200px" />
                                        </div>
                                        <div class="overlay-layer">
                                            <a href="#" class="btn font-weight-bolder btn-sm btn-primary mr-2">Quick View</a>
                                            <a href="#" class="btn font-weight-bolder btn-sm btn-light-primary">Purchase</a>
                                        </div>
                                    </div>
                                    <div class="text-center mt-5 mb-md-0 mb-lg-5 mb-md-0 mb-lg-5 mb-lg-0 mb-5 d-flex flex-column">
                                        <a href="#" class="font-size-h5 font-weight-bolder text-dark-75 text-hover-primary mb-1">Hugo Boss</a>
                                        <span class="font-size-lg">Outlines keep poorly thought</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-lg-12 col-xxl-4">
                            <div class="card card-custom card-shadowless">
                                <div class="card-body p-0">
                                    <div class="overlay">
                                        <div class="overlay-wrapper rounded bg-light text-center">
                                            <img src={img9} alt="" class="mw-100 w-200px" />
                                        </div>
                                        <div class="overlay-layer">
                                            <a href="#" class="btn font-weight-bolder btn-sm btn-primary mr-2">Quick View</a>
                                            <a href="#" class="btn font-weight-bolder btn-sm btn-light-primary">Purchase</a>
                                        </div>
                                    </div>
                                    <div class="text-center mt-5 mb-md-0 mb-lg-5 mb-md-0 mb-lg-5 mb-lg-0 mb-5 d-flex flex-column">
                                        <a href="#" class="font-size-h5 font-weight-bolder text-dark-75 text-hover-primary mb-1">Armani</a>
                                        <span class="font-size-lg">Outlines keep poorly thought</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default ProductList;