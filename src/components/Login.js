import React from "react";
import { useState } from 'react';
import "../../src/assets/css/loginsignin.css"
function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password1, setPassword1] = useState('');




  function sts() {
    var myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("X-CSRFToken", "KMc5hxXTxGq48f6W7B9S2FipbKgtw0PovamdrfyY7fYp2zJGTo0t4TkwtbyIFRML");

    var raw = JSON.stringify({
      "email": email,
      "password": password,
      "password1": password1
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://94.183.74.154:1234/account/api/v1/registration/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => (<div class="alert alert-info" role="alert">
        این ایمیل قبلا ثبت شده است با ایمیلی دیگر امتحان کنید.
      </div>, error));


  }

  return (
    <>
      <div class='split right' style={{ backgroundColor: '#79c77e' }}></div>
      <div class=" py-40 split leftl">
        <div className="d-flex justify-content-center ">
          <div dir="rtl" className="col-md-11  fontv">
            <div class="card card-custom">
              <form>
                <div class="card-body">
                  <div class="form-group row">
                    <div className="pb-3 pt-lg-0 pt-5">
                      <h3 className="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">خوش آمدید</h3>
                      <span className="text-muted font-weight-bold font-size-h4">اکانت ندارید؟
                        <a href="signin" id="kt_login_signup" className="text-primary font-weight-bolder">یک اکانت بسازید </a></span>
                    </div>
                  </div>
                  <div class="form-group row pt-3">
                    <label for="example-search-input" class="col-3 col-form-label">ایمیل:</label>
                    <div class="col-8">
                      <input class="form-control" onChange={e => setEmail(e.target.value)} type="name" id="example-search-input" />
                    </div>
                  </div>
                  <div class="form-group row pt-3">
                    <label for="example-email-input" class="col-3 col-form-label ">گذرواژه:</label>
                    <div class="col-8">
                      <input class="form-control" onChange={e => setPassword(e.target.value)} type="pass" id="example-email-input" />
                    </div>
                  </div>

                  <div class="col-12 d-flex justify-content-center pt-4">

                    <button onClick={sts} class="btn btn-success col-md-10 ">ورود</button>
                  </div>
                  {/* <div class="form-group row d-flex justify-content-end">
                              <div className="col-md-5 ">
                                <a type="" class="btn btn-danger btn-lg btn-block">اضافه کردن آدرس</a>
                              </div>
                            </div> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default SignIn
  ;
