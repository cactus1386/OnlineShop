import React from "react";
import { useState, useEffect } from 'react'
import Cart from './ProfileCart'
import  '../assets/css/Profile.css'
import RPP from './RecentlyPurchasedPrdcts';

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
            <div class='col-md-12 '>
            <div class="d-flex justify-content-center col-md-12">
                <div className="col-md-9 bg-light border rounded border fontv" dir= "rtl">
                    <div class=" pt-1 p-3 container">
                        <div class=" col-md-12 inline">

                                <img src={Infos.image} alt="image" class="img "/>

                                <a class="h3">{Infos.name}</a>
                        </div>
                            <div class="mb-7 ">
                                <div class="d-flex justify-content-between align-items-center pt-2">
                                    <span class="text-dark-75 font-weight-bolder mr-2">شماره همراه:</span>
                                    <a href="#" class="text-muted text-hover-primary">{Infos.phone}</a>
                                </div>

                                <div class="d-flex justify-content-between align-items-center pt-3">
                                    <span class="text-dark-75 font-weight-bolder mr-2">ایمیل:</span>
                                    <a href="#" class="text-muted text-hover-primary">{Infos.phone}</a>
                                </div>
                                <div class="d-flex justify-content-between align-items-center pt-3 pb-3">
                                    <span class="text-dark-75 font-weight-bolder mr-2">آدرس:</span>
                                    <span class="text-muted font-weight-bold">{Infos.description}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Cart />
                <RPP/>
            </div>
                
                
     {/* .. */}
         </>
  )}
export default UserInfo;
