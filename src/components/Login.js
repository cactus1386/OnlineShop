import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/Login.css';

const Login = () => {
    return (
        <div className="login-container fontv">
            <div className="login-box">
                <div className="login-left">
                    <h2 className="login-title">ورود به حساب کاربری</h2>
                    <p className="login-subtitle">ورود با شبکه‌های اجتماعی</p>
                    <div className="social-buttons">
                        <button className="btn btn-facebook">فیس‌بوک</button>
                        <button className="btn btn-google">گوگل</button>
                        <button className="btn btn-linkedin">لینکدین</button>
                    </div>
                    <p className="or-text">یا</p>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="ایمیل خود را وارد کنید" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="رمز عبور خود را وارد کنید" />
                    </div>
                    <button className="btn btn-primary w-75">ورود</button>
                </div>
                <div className="login-right">
                    <h2 className="signup-title">جدید هستید؟</h2>
                    <p className="signup-subtitle">ثبت نام کنید و از فرصت‌های جدید بهره‌مند شوید!</p>
                    <Link to="/register">
                        <button className="btn btn-outline-light">ثبت نام</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
