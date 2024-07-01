import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/Login.css'; // Reuse the same CSS for consistency

const Register = () => {
    return (
        <div className="login-container fontv">
            <div className="login-box">
                <div className="login-left">
                    <h2 className="login-title">ثبت نام</h2>
                    <p className="login-subtitle">ثبت نام با شبکه‌های اجتماعی</p>
                    <div className="social-buttons">
                        <button className="btn btn-facebook">فیس‌بوک</button>
                        <button className="btn btn-google">گوگل</button>
                        <button className="btn btn-linkedin">لینکدین</button>
                    </div>
                    <p className="or-text">یا</p>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="نام کامل خود را وارد کنید" />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="ایمیل خود را وارد کنید" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="رمز عبور خود را وارد کنید" />
                    </div>
                    <button className="btn btn-primary w-75">ثبت نام</button>
                </div>
                <div className="login-right">
                    <h2 className="signup-title">حساب کاربری دارید؟</h2>
                    <p className="signup-subtitle">وارد شوید و از فرصت‌های جدید بهره‌مند شوید!</p>
                    <Link to="/login">
                        <button className="btn btn-outline-light">ورود</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
