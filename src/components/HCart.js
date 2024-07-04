import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

const Hcart = () => {
    const [Cart,setCart]=useState([])
    
    const myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("authorization", "Basic YWRtaW5AYWRtaW4uY29tOjEyMw==");
    myHeaders.append("X-CSRFToken", "B0ggc6ViDGhfiOn318IQMrrN5mdP5hlVv7CAtbQkhE2o863vPfwVmya1o31Qypr6");
    
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
    
    fetch("http://94.183.74.154:1234/cart/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const items = result.items;
        items.forEach(item => {
            const product = item.product;
            setCart(product);
            console.log(Cart);
        });
    })      .catch((error) => console.error(error));

        
            return (<>
                <div class="col-md-12">
                    <div class='d-flex justify-content-center '>
                        <div class= 'col-md-8 fontv border rounded'dir='rtl'>
                            <div class="">
                                <div class="row">
                                    <div class="col-md-8 cart">
                                        <div class="title">
                                            <div class="row">
                                                <div class="col border-bottom p-3"><h4><b>سبد خرید</b></h4></div>

                                            </div>
                                        </div>
{/* 
                                        {Cart.map(c=><div class="row  ">
                                            <div class="row main align-items-center">
                                                <div class="col-2"><img class="img-fluid" src={c.pic}/></div>
                                                <div class="col">
                                                    <div class="row text-muted">{c.id}</div>
                                                    <div class="row">name</div>
                                                </div>
                                                <div class="col">
                                                <button  class="btn btn-sm">-</button><a href="#" class="border">0</a><button class="btn btn-sm">+</button>
                                                </div>
                                                <div class="col"><a>{c.price}</a></div>
                                            </div>
                                        </div>
                                        )} */}

                                    </div>
                                    <div class="col-md-4 summary pt-5">
                                        <div class="row">
                                            <div class="col-md-8 ">قیمت کل محصولات:</div>
                                            <div class="col text-right py-1">6,788,000تومان</div>
                                        </div>
                                        <form>
                                            <a>انتخاب نحوه ارسال:</a>
                                            <div class="col-md-10 pt-1"><select class="form-select "><option class="text-muted">پست معمولی 5,000 تومان</option><option class="text-muted">پست پیشتاز 10,000 تومان</option></select></div>

                                        </form>
                                        <div class="row pt-3" >
                                            <div class="col">قیمت کل:</div>
                                            <div class="col text-right">7,000,000تومان</div>
                                        </div>
                                        <div class="pt-3 d-flex justify-content-center "><button class="btn col-md-10 btn-success">پرداخت</button></div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    
                    </>
            );
        }
    
export default Hcart;
