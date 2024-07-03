import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Footer = () => {
  return (<>
<div class="container-fluid fontv " dir="rtl">
  <footer class="row row-cols-md-5 py-5  border-top">
    
    <div class="col mb-3 ">
        <h6 class="text-uppercase fw-bold mb-4">
            <i>🛒</i>فروشگاه اسمائیل
        </h6>
        <p>
            ما خوبیم بسیار خفنیم همه چی میفروشیم
             همه از ما میخرن ما پولدار میشیم
              اندرو تیت
          </p>

    </div>

    <div class="col mb-3">
      <h5>دسترسی سریع</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">خانه</a></li>
        <li class="nav-item mb-2"><a href="products" class="nav-link p-0 text-body-secondary">محصولات</a></li>
        <li class="nav-item mb-2"><a href="about" class="nav-link p-0 text-body-secondary">درباره ی ما</a></li>
      </ul>
    </div>

    <div class="col mb-3">
      <h5>Section</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
      </ul>
    </div>

    <div class="col mb-3">
      <h5>ارتباط با ما</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">091902312343</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">expample@example.com</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">آدرس:</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">زنجان افغانستان آلمان پلاک 68</a></li>
      </ul>
    </div>
    <div class="col mb-3">
            
    </div>
  </footer>
</div>
  </>   
  );
};

export default Footer;
