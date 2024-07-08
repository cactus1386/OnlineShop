import React, { useState, useEffect } from 'react';
import img1 from '../assets/media/products/1.png';
import "../font/font.css";
import Album from './Album';
import Comment from './CommentBox';
import Mortabet from './MultiItemSlider';

function PI() {
    const myHeaders = new Headers();
myHeaders.append("accept", "application/json");
myHeaders.append("authorization", "Basic YWRtaW5AYWRtaW4uY29tOjEyMw==");
myHeaders.append("X-CSRFToken", "kQUzMRoLN87V3DlfnJ468d39mueB1HHzeXgT3WjNr6S4TV1HbQSbIkMnFb2CuPNK");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("http://94.183.74.154:1234/api/v1/products/", requestOptions)
  .then((response) => response.text())
//   .then((result) => console.log(result))
  .catch((error) => console.error(error));

  return (
        
    <div className='users fontv'>
        <div class=" row col-md-12" dir="rtl" >
        <div class="pb-5 col-md-6" dir="rtl">
            <div class="border-bottom p-2 h1">
                    پکیج شادی آور
                </div>  
                <div className=' card bg-light' dir="rtl">
                        <div>
                            <div class="d-flex justify-content-end">
                                <a class=' border border-danger text-danger rounded-circle p-2'>5%</a>
                            </div>
                            <Album />
                        </div>
                </div>
        </div>
            <div class=" col-md-6 h-25 pt-5" >
                <div class="card shadow" dir="rtl">
                    <div class="border-bottom p-3 col-md-12 card-title">
                        <h4>قیمت:</h4>
                    </div>
                    <div class="card-body d-flex justify-content-end ">
                            <h5>15644$</h5>
                    </div>
                    <div class="border-bottom p-3 col-md-12 card-title">
                        <h4>برند:</h4>
                    </div>
                    <div class="card-body d-flex justify-content-end ">
                            <h5>نایک</h5>
                    </div>
                    <div class="border-bottom p-3 col-md-12 card-title">
                        <h4>موجودی:</h4>
                    </div>
                    <div class="card-body d-flex justify-content-end ">
                            <h5>10</h5>
                    </div>
                    <div class="border-bottom p-3 col-md-12 card-title">
                        <h4>سایز ها:</h4>
                    </div>
                    <div class="card-body d-flex justify-content-end ">
                            <h5>S,M,L,X,XL,XXL</h5>
                    </div>
                    <div class="border-bottom p-3 col-md-12 card-title">
                        <h4>توضیحات:</h4>
                    </div>
                    <div class="card-body d-flex justify-content-end ">
                            <h5>فالانی</h5>
                    </div>
                    <div class="border-bottom p-3 col-md-12 card-title">
                        <h4>رنگ:</h4>
                    </div>
                    <div class="card-body d-flex justify-content-end "> 
                        <div class="radio-inline">
                            <label class="radio radio-outline radio-outline-2x radio-primary">
                                <input type="radio" name="radios16"/>
                                <span></span>
                                سفید
                            </label>
                            <label class="radio radio-outline radio-outline-2x radio-primary">
                                <input type="radio" name="radios16"/>
                                <span></span>
                                سیاه
                            </label>
                            <label class="radio radio-outline radio-outline-2x radio-primary">
                                <input type="radio" name="radios16"/>
                                <span></span>
                                نقره ای
                            </label>
                            <label class="radio radio-outline radio-outline-2x radio-primary">
                                <input type="radio" name="radios16"/>
                                <span></span>
                                بنفش
                            </label>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center "><button type="button" class="btn btn-outline-success col-md-9 m-4"><h4>افزودن به سبد خرید </h4></button></div>
                </div>
            </div>
        
        <div class="col-md-12 pt-5">
            <Comment />
        </div>

        <div className="col-md-12">
                <div className="card card-custom gutter-b">
                    <div className="card-header">
                        <div className="card-title" dir='rtl'>
                        <div className="card-label p-3 h1">محصولات مرتبط</div>
                            <Mortabet/>
                        </div>
                    </div>
                    {/* Other content */}
                </div>
            </div>
        </div>
    </div>
  );
}

export default PI;