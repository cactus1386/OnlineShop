import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/css/General.css';


const Hcart = () => {
    const [CartItems,setCart]=useState([])
    const [TP,setTP]=useState([])

    function getData() {
        const myHeaders = new Headers();
            myHeaders.append("accept", "application/json");
            myHeaders.append("authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIzMzk3OTg0LCJpYXQiOjE3MjMzOTE5ODQsImp0aSI6ImZmZTY3ZDFkNmJjYzQyMGY5ZGY0Y2ZkMGQ0Zjc1MjRmIiwidXNlcl9pZCI6MX0.izIW47xPJQ6ImDKVhnmRrzhgtJWWh_WMUVShIWe65Nw");
            myHeaders.append("X-CSRFToken", "a4gVs4LKoK9qpwBtyktdTabLGKkDTjtt0aSC8gxZdbs3aTs15Xp16uXl7nRL3uLI");
            
        const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
        };
        
        fetch("http://94.183.74.154:1234/cart/", requestOptions)
        .then((response) => response.json())
        .then((result) => { setCart(result.items); setTP(result)})
        .catch((error) => console.error(error));
    }

    useEffect(() => {
        getData()
    }, []);        
    const handleClick1 = () => {
        const myHeaders = new Headers();
            myHeaders.append("accept", "application/json");
            myHeaders.append("X-CSRFToken", "DZbwWyTpiMACxedxhNb3TEQHyePiAnYdt5NdCKFE7dTfiB45Oq7R6YChZRmqKygs");
            myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIzMzk3OTg0LCJpYXQiOjE3MjMzOTE5ODQsImp0aSI6ImZmZTY3ZDFkNmJjYzQyMGY5ZGY0Y2ZkMGQ0Zjc1MjRmIiwidXNlcl9pZCI6MX0.izIW47xPJQ6ImDKVhnmRrzhgtJWWh_WMUVShIWe65Nw");
            
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          redirect: "follow"
        };
        
        fetch("http://94.183.74.154:1234/cart/add_item/", requestOptions)
          .then((response) => response.json())
          .then((result) => getData())
          .catch((error) => console.error(error));
    };
 
    const handleClick2 = () => {
        const myHeaders = new Headers();
            myHeaders.append("accept", "application/json");
            myHeaders.append("X-CSRFToken", "DZbwWyTpiMACxedxhNb3TEQHyePiAnYdt5NdCKFE7dTfiB45Oq7R6YChZRmqKygs");
            myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIzMzk3OTg0LCJpYXQiOjE3MjMzOTE5ODQsImp0aSI6ImZmZTY3ZDFkNmJjYzQyMGY5ZGY0Y2ZkMGQ0Zjc1MjRmIiwidXNlcl9pZCI6MX0.izIW47xPJQ6ImDKVhnmRrzhgtJWWh_WMUVShIWe65Nw");

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            redirect: "follow"
            };

        fetch("http://94.183.74.154:1234/cart/remove_item/", requestOptions)
            .then((response) => response.json())
            .then((result) => getData())
            .catch((error) => console.error(error));
    };
 
            return (<>
                    <div class="col-md-12 mt-5">
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
                                                        <div class=" pt-2">
                                                            <div class="card bg-light">
                                                                <div class="row main align-items-center  p-3">
                                                                    <div style={{width:"50px",height:"auto"}}><img class="img-fluid" src = {c.product.pic}/></div>
                                                                    <div class="col">
                                                                        <div class="row"><a class="linkd" href={'pi?id=' + c.product.id}>{c.product.name}</a></div>
                                                                    </div>
                                                                    <div class="col">
                                                                        <div class="col text-dark"><a>{c.product.price} (تومان)</a></div>
                                                                    </div>
                                                                    <div class="col">
                                                                        <button type="button" class="btn btn-success btn-sm" onClick={handleClick1}>+</button>
                                                                        <a class="linkd p-3">{c.quantity}</a> 
                                                                        <button type="button" class="btn btn-danger btn-sm" onClick={handleClick2}>-</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        ))}
                                                </div>
                                        </div>

                                        <div class="col-md-4 summary pt-5">
                                            <div class="row">
                                                <div class="col-md-8">قیمت کل محصولات:</div>
                                                <div class="col text-right py-2">{TP.total_price}  (تومان)</div>
                                            </div>

                                            <form>
                                                <a>انتخاب نحوه ارسال:</a>
                                                <div class="col-md-10 pt-2">
                                                    <select class="form-select">
                                                        <option class="text-muted" value={"5000"}>پست معمولی 5,000 تومان</option>
                                                        <option class="text-muted" value={"10000"}>پست پیشتاز 10,000 تومان</option>
                                                    </select>
                                                </div>
                                            </form>

                                            <div class="row pt-3">
                                                <div class="col-md-8">قیمت  قابل پرداخت:</div>
                                                <div class="col text-right py-2">{TP.total_price}  (تومان)</div>
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
