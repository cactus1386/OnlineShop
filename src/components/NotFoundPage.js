import React from "react";
import img404 from "../assets/media/error/404.png"
import '../assets/css/General.css';

const NotFoundPage = ()  =>{
    return(<>
        <div class="col-md-12">
            <div class=" d-flex justify-content-center">
                <img src={img404} class="col-md-12 w-25"/>
            </div>
            <div class=" d-flex justify-content-center">
                <h1 class="et text-dark">404</h1>
            </div>
            <div class=" d-flex justify-content-center">
                <p class="fontv">صفحه مورد نظر یافت نشد</p>
            </div>
            <div class=" d-flex justify-content-center">
                <button class="btn btn-outline-dark">
                    <a href="/" class="btn btn-bordered buy-this-set-btn">برگشت به صفحه اصلی</a>
                </button>
            </div>
        </div>
        </>
    );
};
export default NotFoundPage;