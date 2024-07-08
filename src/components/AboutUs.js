import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../assets/css/AboutUs.css'; 
import img1 from '../assets/media/stock-600x600/img-1.jpg'; 
import img2 from '../assets/media/stock-600x600/img-2.jpg'; 
import img3 from '../assets/media/stock-600x600/img-3.jpg'; 
import image from '../assets/media/stock-600x400/img-3.jpg'; 

const AboutUs = () => { 
    return ( 
        <div className="container mt-5" dir="rtl"> 
            <div className="row"> 
                <div className="col text-center"> 
                    <h1 className="mb-4 fontv">درباره ما</h1> 
                    <p className="lead fontv"> 
                        ما یک تیم پرشور از متخصصین هستیم که به ارائه بهترین خدمات به مشتریانمان افتخار می‌کنیم. 
                        ما بر این باوریم که ارائه محصولات و خدمات با کیفیت بالا می‌تواند زندگی مشتریان ما را بهبود بخشد. 
                    </p> 
                </div> 
            </div> 
            <div className="row mt-5"> 
                <div className="col-md-6">
                    <img src={image} alt="About Us" className="img-fluid" /> 
                </div> 
                <div className="col-md-6"> 
                    <h2 className="fontv">ماموریت ما</h2> 
                    <p className="fontv"> 
                        ماموریت ما ارائه بهترین محصولات با کیفیت بالا به مشتریان است. ما همیشه در حال بهبود و نوآوری هستیم تا نیازهای مشتریان را برآورده کنیم و به ایجاد یک تجربه خرید لذت‌بخش بپردازیم. 
                    </p> 
                    <h2 className="fontv">تاریخچه ما</h2> 
                    <p className="fontv"> 
                        شرکت ما در سال 2020 تاسیس شد و از آن زمان به ارائه خدمات و محصولات با کیفیت بالا به مشتریان پرداخته‌ایم. ما همیشه در تلاشیم تا با پیشرفت تکنولوژی و نیازهای مشتریان همگام باشیم. 
                    </p> 
                </div> 
            </div> 
            <div className="row mt-5"> 
                <div className="col text-center"> 
                    <h2 className="fontv">تیم ما</h2> 
                </div> 
            </div> 
            <div className="row mt-4"> 
                <div className="col-md-4"> 
                    <div className="card"> 
                        <img src={img1} className="card-img-top" alt="Team Member 1" /> 
                        <div className="card-body text-center"> 
                            <h5 className="card-title">نام عضو تیم</h5> 
                            <p className="card-text">مدیر عامل</p> 
                        </div> 
                    </div> 
                </div> 
                <div className="col-md-4"> 
                    <div className="card"> 
                        <img src={img2} className="card-img-top" alt="Team Member 2" /> 
                        <div className="card-body text-center"> 
                            <h5 className="card-title">نام عضو تیم</h5> 
                            <p className="card-text">مدیر فنی</p> 
                        </div> 
                    </div> 
                </div> 
                <div className="col-md-4"> 
                    <div className="card"> 
                        <img src={img3} className="card-img-top" alt="Team Member 3" /> 
                        <div className="card-body text-center"> 
                            <h5 className="card-title">نام عضو تیم</h5> 
                            <p className="card-text">مدیر بازاریابی</p> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div> 
    ); 
}; 

export default AboutUs;
