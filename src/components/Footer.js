import React from 'react';
import '../assets/css/Footer.css'

const Footer = () => {
  

  
  return (
    <footer className="footer text-light py-1 text-dark shadow bg-white" dir='rtl'>
      <div className="container-fluid fontv">
        <div className="row ">
          <div className='flex-fill border-top border-2 border-success  mb-5 h1'></div>
          {/* Column 1 */}
          <div className="col-md-3 mb-4">
            <h5 className="mb-4 text-dark brand-name">🛒فروشگاه اسمائیل </h5>
            <p className='mb-3'>
              <i class="bi bi-geo-alt-fill"></i> زنجان افغانستان آلمان پلاک 68
            </p>
            <p className='mb-3'>
              <i class="bi bi-telephone-fill"></i>  091902312343
            </p>
            <p className='mb-3'>
              <i class="bi bi-envelope-at-fill "></i> expample@example.com
            </p>
            
            <figcaption className='blockquote-footer text-muted mb-1 mt-1 text-size'>
              با وارد کردن ایمیل خود می توانید از آخرین تخفیف ها با خبر شوید
            </figcaption>
            <div className="input-group mb-3 " >
              <div dir='ltr'><button className="btn btn-ligh border border-secondary" type="button" >
                <i class="bi bi-envelope"></i>
              </button></div>
              <input type="text" className="form-control input-group-append" placeholder="ایمیل خود را وارد کنید" aria-label="Email" />
            </div>

            





          </div>

          {/* Column 2 */}
          <div className="col-md-3 mb-4 hazf ">
            <h5 className="mb-4">خدمات مشتریان</h5>
            <div className='text-secondary'>
              <p className='text-secondary'><a href='/about' className='text-secondary'>درباره ی ما</a></p>
              <p >پرسش های متداول</p>
              <p>حریم خصوصی</p>
            </div>

            <div className='pt-4'>
            <button type="button" className="btn btn-success" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
            <i class="bi bi-instagram"></i>
</button>
<button type="button" className="btn btn-success " data-toggle="tooltip" data-placement="top" title="Tooltip on top">
<i class="bi bi-telegram"></i>
</button>
<button type="button" className="btn btn-success" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
<i class="bi bi-whatsapp"></i>
</button>
            </div>
          </div>

          {/* Column 3 */}
          <div className="col-md-3 mb-4 hazf">
            <h5 className="mb-4">🤩​پرفروش ترین </h5>
            <div>
              <img src="https://placehold.co/200" className="img-fluid mb-2" alt="Best Sellers" />
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
                  src="https://placehold.co/100"
                  className="img-fluid m-1"
                  alt="Instagram"
                />
              ))}
            </div>
          </div>
        </div>
        <div className='flex-fill border-bottom border-success border-2 h1 '></div>
      </div>
      <p className='text-center fontv'>ساخته شده​<i className="fas fa-heart text-danger"></i> توسط تیم-ما.کام

        / کپی رایت ©2024 همه چی متعلق به اسمائیله</p>

        
    </footer>
  );
};

export default Footer;


// >کپی رایت ©2024 همه چی متعلق به اسماییله.
// <p>این وبسایت ساخته شده با️​ <i class="bi bi-balloon-heart"></i><i className="fas fa-heart text-danger"></i> توسط تیم-ما.کام</p>
