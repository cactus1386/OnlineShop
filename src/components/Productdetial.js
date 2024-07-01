import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/plugins/global/plugins.bundle.css'
import '../assets/plugins/custom/prismjs/prismjs.bundle.css'
import '../assets/css/style.bundle.css'
import '../assets/css/pages/login/login-1.css'
import mypic from '../assets/media/products/12.png' 
import '../font/font.css'
import "../../src/App.css"
import {useState} from 'react'

function ProductInfo(){
    const [state,setState]=useState([
        {Pic : mypic,Name : "نیکه ترو بالانث", Price:'455تومان' ,Description: "سلام سلام سلامم. They stop you from indulging in poorly سلام سلام سلامم. They stop you from indulging in poorlyسلام سلام سلامم. They stop you from indulging in poorlyسلام سلام سلامم. They stop you from indulging in poorly    ought out metaphorsy about driving and keep you focused", Size:'40' ,Color:'ابی' ,Instock:'380'},
      ])

    return ( 
        <>
        {state.map(c=><div class="card card-custom gutter-b fontv" dir="rtl">
            <div class="card-body d-flex rounded  bg-success p-12 flex-column flex-md-row flex-lg-column flex-xxl-row">
                <div class="bgi-no-repeat bgi-position-center bgi-size-cover h-300px h-md-auto h-lg-300px h-xxl-auto mw-100 w-550px" style={{ backgroundImage:  "url("+c.Pic+")"}}  ></div>
                     <div class="card card-custom  ml-auto d-flex justify-content-right ">
            <div class="card-body px-12 py-10 ">
                <h3 class="font-weight-bolder font-size-h2 mb-1">
                    <a href="#" class="text-dark-75">{c.Name}</a>
                </h3>
                <div class="text-primary font-size-h4 mb-9">{c.Price}</div>
                <div class="font-size-sm mb-8" >{c.Description}</div>
                <div class="d-flex mb-3">
                    <span class="text-dark-50 flex-root font-weight-bold">سایز:</span>
                    <span class="text-dark flex-root font-weight-bold">{c.Size}</span>
                </div>
                <div class="d-flex mb-3">
                    <span class="text-dark-50 flex-root font-weight-bold">رنگ:</span>
                    <span class="text-dark flex-root font-weight-bold">{c.Color}</span>
                </div>
                <div class="d-flex">
                    <span class="text-dark-50 flex-root font-weight-bold">تعدا موجودی:</span>
                    <span class="text-dark flex-root font-weight-bold">{c.Instock}</span>
                </div>
            </div>

        </div>
    </div>
</div>)}

        </>
     )

}

export default ProductInfo;