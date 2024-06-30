import React from "react";
import { useState, useEffect } from 'react'
import '../../src/assets/css/Comment.css';
import '../assets/font/font.css'
import '../../src/assets/css/backgrounds.css';

const UserInfo  = () => {
  const [Infos, setInfos] = useState([]);
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    show()
  }, []);
  function show() {
    var myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("authorization", "Basic YWRtaW5AYWRtaW4uY29tOjEyMw==");
    myHeaders.append("X-CSRFToken", "n4hX5OH1K0qlLzPz8wZg0mqHgJFjoyZv8sr5fwi6kzYGFTsjUjQR2AsOyaXyxpWS");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("http://94.183.74.154:1234/account/api/v1/profile/", requestOptions)
      .then(response => response.json())
      .then(result => setInfos(result))
      .catch(error => console.log('error', error));

  };

    return (<>
    
        <div className="d-flex justify-content-center fontv " dir="rtl">
                <div className="col-md-12 bg-light border rounded border">
                    <div class="card-body pt-4">
                        <div class=" justify-content-end">
                            <div class="d-flex align-items-end">
                                <div class="d-flex align-items-left">
                                    <div class="flex-shrink-0 mr-4 mt-lg-0 mt-3">
                                        <div class="symbol symbol-circle symbol-lg-75">
                                            <img src={Infos.image} alt="image"></img>
                                        </div>
                                    </div>
                                    <div class="d-flex flex-column">
                                        <a href="#" class="text-dark font-weight-bold text-hover-primary font-size-h4 mb-0">{Infos.name}</a>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-7 ">
                                <div class="d-flex justify-content-between align-items-center my-1">
                                    <span class="text-dark-75 font-weight-bolder mr-2">شماره همراه:</span>
                                    <a href="#" class="text-muted text-hover-primary">{Infos.phone}</a>
                                </div>

                                <div class="d-flex justify-content-between align-items-center pt-3">
                                    <span class="text-dark-75 font-weight-bolder mr-2">ایمیل:</span>
                                    <a href="#" class="text-muted text-hover-primary">{Infos.phone}</a>
                                </div>
                                <div class="d-flex justify-content-between align-items-center pt-3">
                                    <span class="text-dark-75 font-weight-bolder mr-2">آدرس:</span>
                                    <span class="text-muted font-weight-bold">{Infos.description}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </>
  )}
export default UserInfo;
