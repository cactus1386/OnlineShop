import React from 'react';
import '../../font/font.css'
// ال آی می خوای برای جلسه بعد این هدر رو راست به چپ کنی. فکر کنم بشه برای بعد از امتحان ها
function Iheader(){
  
  
    return (
        
        <div class="row justify-content-center py-8 px-8 py-md-27 px-md-0">
        <div class="col-md-10 ">
            <div class="d-flex justify-content-between pb-10 pb-md-20 flex-column flex-md-row">
                <h1 class="display-4 font-weight-boldest mb-10 fontv" >لیست خرید های قبلی</h1>
                <div class="d-flex flex-column align-items-md-end px-0">
                  
                    <a href="#" class="mb-5">
                        <img src="assets/media/logos/logo-dark.png" alt="" />
                    </a>
               
                    <span class="d-flex flex-column align-items-md-end opacity-70">
                        <span>Cecilia Chapman, 711-2880 Nulla St, Mankato</span>
                        <span>Mississippi 96522</span>
                    </span>
                </div>
            </div>
            <div class="border-bottom w-100"></div>
            <div class="d-flex justify-content-between pt-6">
                <div class="d-flex flex-column flex-root">
                    <span class="font-weight-bolder mb-2 fontv ">تاریخ سفارش</span>
                    <span class="opacity-70">Jan 07, 2020</span>
                </div>
                <div class="d-flex flex-column flex-root">
                    <span class="font-weight-bolder mb-2 fontv">شماره سفارش</span>
                    <span class="opacity-70">64616-103</span>
                </div>
                <div class="d-flex flex-column flex-root">
                    <span class="font-weight-bolder mb-2 fontv">ارسال شده به</span>
                    <span class="opacity-70">Iris Watson, P.O. Box 283 8562 Fusce RD.
                    <br />Fredrick Nebraska 20620</span>
                </div>
            </div>
        </div>
    </div>


    )
}
export default Iheader;