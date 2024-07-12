// src/components/Login.js

import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../../src/assets/css/loginsignin.css";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    const myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("X-CSRFToken", "6zEvxI3uMKS9AaKU3cMb189vRVbjBKaQigtYWXW18KtL4dSuhrdRE2HUcWGR75af");

    const raw = JSON.stringify({ email, password });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch("http://94.183.74.154:1234/account/api/v1/jwt/create/", requestOptions);
      const result = await response.json();

      if (response.ok) {
        login(result.access || result.token); // Store the token and update login state
        navigate('/'); // Redirect to the main page
      } else {
        setError(result.detail || 'Login failed'); // Display error message
        console.error(result); // Log error response
      }
    } catch (error) {
      setError('An unexpected error occurred');
      console.error(error);
    }
  };

  return (
    <>
      <div className='split right' style={{ backgroundColor: '#79c77e' }}>
      </div>
      <div className="py-40 split leftl">
        <div className="d-flex justify-content-center">
          <div dir="rtl" className="col-md-11 col-sm-11 col-11 fontv">
            <div className="card card-custom">
              <form onSubmit={handleSubmit}>
                <div className="card-body">
                  <div className="form-group row">
                    <div className="pb-3 pt-lg-0 pt-5">
                      <h3 className="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">خوش آمدید</h3>
                      <span className="text-muted font-weight-bold font-size-h4">اکانت ندارید؟
                        <a href="register" id="kt_login_signup" className="text-primary font-weight-bolder">یک اکانت بسازید </a>
                      </span>
                    </div>
                  </div>
                  <div className="form-group row pt-3">
                    <label htmlFor="email" className="col-md-3 col-sm-3 col-3 col-form-label">ایمیل:</label>
                    <div className="col-md-8 col-sm-8 col-8">
                      <input
                        className="form-control"
                        onChange={e => setEmail(e.target.value)}
                        type="email"
                        id="email"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group row pt-3">
                    <label htmlFor="password" className="col-md-3 col-sm-3 col-3 col-form-label">گذرواژه:</label>
                    <div className="col-md-8 col-sm-8 col-8">
                      <input
                        className="form-control"
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                        id="password"
                        required
                      />
                    </div>
                  </div>
                  {error && <div className="alert alert-danger">{error}</div>}
                  <div className="col-md-12 col-sm-12 col-12 d-flex justify-content-center pt-4">
                    <button type="submit" className="btn btn-success col-10 col-sm-10 col-md-10">ورود</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;