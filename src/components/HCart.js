import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/css/General.css';


const Hcart = () => {
    const [CartItems,setCart]=useState([])
    const [TP,setTP]=useState([])
    
    const myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("authorization", "Basic YWRtaW5AYWRtaW4uY29tOjEyMw==");
    myHeaders.append("X-CSRFToken", "Ii19oqugJx0mioW5pAC1NBskRy7YHyEzCpntFvpinvLv8GCxdHq6nIbyafVZaGKK");
    
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
    
    fetch("http://94.183.74.154:1234/cart/", requestOptions)
      .then((response) => response.json())
      .then((result) => { setCart(result.items); setTP(result)})

      .catch((error) => console.error(error));
        
            return (<>
                    <div class="col-md-112 mt-5">
                        <div class="row justify-content-center">
                            <div class="col-md-8 fontv card" dir="rtl">
                                <div class="p-3">
                                    <div class="row">
                                        <div class="col-md-8 cart ">
                                            <div class="title">
                                                <div class="row">
                                                    <div class="col border-bottom p-3 fontv"><h4><b>سبد خرید</b></h4></div>
                                                </div>
                                            </div>
                                                <div class="row">
                                                        {CartItems.map(c => (
                                                        <div class="row main align-items-center border-bottom p-3">
                                                            <div class="col-2"><img class="img-fluid" src="https://i.imgur.com/ba3tvGm.jpg"/></div>
                                                            <div class="col">
                                                                <div class="row">{c.product.name}</div>
                                                            </div>
                                                            <div class="col">
                                                                <a class="linkd">{c.quantity}</a> 
                                                            </div>
                                                            <div class="col"><a>248$</a></div>
                                                        </div>
                                                        ))}
                                                </div>
                                        </div>

                                        <div class="col-md-4 summary pt-5">
                                            <div class="row">
                                                <div class="col-md-8">قیمت کل محصولات:</div>
                                                <div class="col text-right py-2">{TP.total_price},000  (تومان)</div>
                                            </div>

                                            <form>
                                                <a>انتخاب نحوه ارسال:</a>
                                                <div class="col-md-10 pt-2">
                                                    <select class="form-select">
                                                        <option class="text-muted" value={"5000"}>پست معمولی 5,000 تومان</option>
                                                        <option class="text-muted">پست پیشتاز 10,000 تومان</option>
                                                    </select>
                                                </div>
                                            </form>

                                            <div class="row pt-4">
                                                <div class="col">قیمت کل:</div>
                                                <div class="col text-right">{TP.total_price},000  (تومان)</div>
                                            </div>

                                            <div class="pt-4 d-flex justify-content-center">
                                                <button class="btn col-md-10 btn-success">پرداخت</button>
                                            </div>
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
