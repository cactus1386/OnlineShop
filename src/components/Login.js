import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../src/assets/css/loginsignin.css";

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

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
        localStorage.setItem('token', result.token); // Store the token in local storage
        setIsLoggedIn(true); // Set the isLoggedIn state to true
        navigate('/'); // Redirect to the main page
      } else {
        console.error(result); // Handle error response
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className='split right' style={{ backgroundColor: '#79c77e' }}>
        <img src="https://www.svgrepo.com/show/217771/shopping-logo.svg" className='img' />
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
