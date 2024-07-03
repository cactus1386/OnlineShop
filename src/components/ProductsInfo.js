import React, { useState, useEffect } from 'react';
import img1 from '../assets/media/products/1.png';
import "../font/font.css";
import Album from './Album';
import Test from './MultiItemSlider';

function PI() {

  return (
        
    <div className='users fontv'>
        <div class=" row col-md-12" >
            <div class=" col-md-4 h-25 pt-5" >
  
                <div class="card" dir="rtl">
                    <div class="border-bottom p-3 col-md-12 card-title">
                        <h4>قیمت:</h4>
                    </div>
                    <div class="card-body d-flex justify-content-end ">
                            <h5>15644$</h5>
                    </div>
                    <div class="border-bottom p-3 col-md-12 card-title">
                        <h4>فروشنده:</h4>
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
                    <button type="button" class="btn btn-outline-success  ذفد-ملcol-md-10 m-4"><h4>افزودن به سبد خرید </h4>     </button>
                </div>
            </div>
            

    <div class="col-md-3"></div>
        <div class="pb-5 col-md-5" dir="rtl">
            <div class="border-bottom p-2 ">
                    <h3>پکیج شادی آور</h3>
                </div>
                <div className=' card bg-light' dir="rtl">
                        <Album />
                </div>
        </div>

        <div className="col-md-12">
                <div className="card card-custom gutter-b">
                    <div className="card-header">
                        <div className="card-title" dir='rtl'>
                        <h3 className="card-label p-3">محصولات مرتبط</h3>
                            <Test/>
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