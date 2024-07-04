import React from 'react';
import '../assets/css/Footer.css'

const Footer = () => {
  return (
    <footer className="footer bg-$green-500 text-light py-1" dir='rtl'>
      <div className="container">
        <div className="row ">
          <div className='flex-fill border-top  border-light h1 mb-5'></div>
          {/* Column 1 */}
          <div className="col-md-3 mb-4">
            <h5 className="mb-4">🛒فروشگاه اسمائیل </h5>
            <p>
            <i class="bi bi-geo-alt-fill"></i> زنجان افغانستان آلمان پلاک 68
            </p>
            <p className='mb-3'>
            <i class="bi bi-telephone-fill"></i>  091902312343 
            </p>
            <p>
            <i class="bi bi-envelope-at-fill"></i> expample@example.com
            </p>
            <div className="input-group mb-3 " >
              <div dir='ltr'><button className="btn btn-ligh border-4" type="button" >
                <i class="bi bi-envelope"></i>
                </button></div> 
              <input type="text" className="form-control" placeholder="ایمیل خود را وارد کنید" aria-label="Email" />
              <div className="input-group-append">
               
              </div>
            </div>


           


          </div>
          
          {/* Column 2 */}
          <div className="col-md-3 mb-4 hazf">
            <h5 className="mb-4">🎉​آخرین تخفیف ها</h5>
            <div>
              <img src="https://via.placeholder.com/100" className="img-fluid mb-2" alt="News" />
              <h6>ما خوبیم بسیار خفنیم همه چی میفروشیم
            همه از ما میخرن ما پولدار میشیم
            اندرو تیت</h6>
            </div>
            <div>
              <img src="https://via.placeholder.com/100" className="img-fluid mb-2" alt="News" />
              <h6>ما خوبیم بسیار خفنیم همه چی میفروشیم
            همه از ما میخرن ما پولدار میشیم
            اندرو تیت</h6>
              
            </div>
          </div>

          {/* Column 3 */}
          <div className="col-md-3 mb-4 hazf">
            <h5 className="mb-4">🤩​پرفروش ترین </h5>
            <div>
              <img src="https://via.placeholder.com/200" className="img-fluid mb-2" alt="Best Sellers" />
              <p>سیب زمینی با گوشت</p>
              <div className="text-warning">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
            </div>
          </div>

          {/* Column 4 */}
          <div className="col-md-3 mb-4 hazf">
            <h5 className="mb-4"> <i class="bi bi-instagram"></i> اینستاگرام</h5>
            <div className="d-flex flex-wrap">
              {[...Array(4)].map((_, i) => (
                <img
                  key={i}
                  src="https://via.placeholder.com/100"
                  className="img-fluid m-1"
                  alt="Instagram"
                />
              ))}
            </div>
          </div>
        </div>
        <div className='flex-fill border-bottom border-light h1 '></div>
      </div>
      <p className='text-center'>این وبسایت ساخته شده با️​ <i class="bi bi-balloon-heart"></i><i className="fas fa-heart text-danger"></i> توسط تیم-ما.کام
      
          / کپی رایت ©2024 همه چی متعلق به اسمائیله</p>
    </footer>
  );
};

export default Footer;


// >کپی رایت ©2024 همه چی متعلق به اسماییله.
// <p>این وبسایت ساخته شده با️​ <i class="bi bi-balloon-heart"></i><i className="fas fa-heart text-danger"></i> توسط تیم-ما.کام</p>