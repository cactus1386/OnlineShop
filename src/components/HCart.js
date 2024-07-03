import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

const Cart = () => {
    const [state,setState]=useState([])

function HCart() {
    const [counter, setCounter] = useState(0);
 
    const increase = () => {
        setCounter(counter + 1);
    };
    const decrease = () => {
        setCounter(counter - 1);
    };




    
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

                                    {state.map(c=><div class="row  ">
                                        <div class="row main align-items-center">
                                            <div class="col-2"><img class="img-fluid" src="https://i.imgur.com/ba3tvGm.jpg"/></div>
                                            <div class="col">
                                                <div class="row text-muted">{c.Category}</div>
                                                <div class="row">{c.Name}</div>
                                            </div>
                                            <div class="col">
                                            <button onClick={decrease} class="btn btn-sm">-</button><a href="#" class="border">{counter}</a><button onClick={increase} class="btn btn-sm">+</button>
                                            </div>
                                            <div class="col"><a>{c.Price}</a></div>
                                        </div>
                                    </div>
                                    )}

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
}
    
export default HCart;
   