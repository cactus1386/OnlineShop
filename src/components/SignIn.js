import React, { useState } from "react";
import "../../src/assets/css/loginsignin.css";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password1, setPassword1] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    const myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("X-CSRFToken", "KMc5hxXTxGq48f6W7B9S2FipbKgtw0PovamdrfyY7fYp2zJGTo0t4TkwtbyIFRML");

    const raw = JSON.stringify({
      email: email,
      password: password,
      password1: password1,
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    try {
      const response = await fetch("http://94.183.74.154:1234/account/api/v1/registration/", requestOptions);
      const result = await response.json();

      if (response.ok) {
        navigate('/login'); // Redirect to login page after successful registration
      } else {
        setError(result); // Display error message
      }
    } catch (error) {
      setError(error.toString());
    }
  };

  return (
    <>
      <div className='split right' style={{ backgroundColor: '#79c77e' }}>
        <img src="https://www.svgrepo.com/show/217771/shopping-logo.svg" className='imgw' />
      </div>
      <div className="py-40 split leftl">
        <div className="d-flex justify-content-center ">
          <div dir="rtl" className="col-md-11 col-sm-11 col-11 fontv">
            <div className="card card-custom">
              <form onSubmit={handleSubmit}>
                <div className="card-body">
                  <div className="form-group row">
                    <div className="pb-1 pt-lg-0 pt-5">
                      <h3 className="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">ثبت نام</h3>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="example-email-input" className="col-md-3 col-sm-3 col-3 col-form-label">ایمیل:</label>
                    <div className="col-md-8 col-sm-8 col-8">
                      <input className="form-control" onChange={e => setEmail(e.target.value)} type="email" id="example-email-input" dir="ltr" required />
                    </div>
                  </div>
                  <div className="form-group row pt-4">
                    <label htmlFor="example-password-input" className="col-md-3 col-sm-3 col-3 col-form-label">گذرواژه:</label>
                    <div className="col-md-8 col-sm-8 col-8">
                      <input className="form-control" onChange={e => setPassword(e.target.value)} type="password" id="example-password-input" required />
                    </div>
                    <div id="passwordHelpBlock" className="form-text col-md-8 col-sm-8 col-8 blockquote-footer pt-2">پسورد شما باید بین ۸ تا ۲۰ کاراکتر یاشد و دارای اعداد و حروف باشد و نباید دارای فاصله و حروف خاص باشد.</div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="example-password1-input" className="col-md-3 col-sm-3 col-3 col-form-label">تکرار گذرواژه:</label>
                    <div className="col-md-8 col-sm-8 col-8">
                      <input className="form-control" onChange={e => setPassword1(e.target.value)} type="password" id="example-password1-input" required />
                    </div>
                  </div>
                  {error && <div className="alert alert-danger" role="alert">{error}</div>}
                  <div className="col-md-12 col-sm-12 col-12 d-flex justify-content-center pt-2">
                    <button type="submit" className="btn btn-success col-10 col-sm-10 col-md-10">ثبت</button>
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

export default SignIn;
