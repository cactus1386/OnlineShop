import React from "react";
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../../src/assets/css/Comment.css';
import { event } from "jquery";



const Comments = (handleKeyPress) => {
  const [Comments, setComments] = useState([]);
  const [Comment, setComment] = useState('');
  const [Name, setName] = useState('');
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    show()
  }, []);
  function show() {
    fetch("http://94.183.74.154:1234/comments/api/v1/post")
      .then(response => response.json())
      .then(result => setComments(result))
      .then(result => setLoading(false))
      .catch(error => console.log('error', error));

  };

  function sendToServer() {
    setLoading(true)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA4MzE3NTAyLCJpYXQiOjE3MDgzMTE1MDIsImp0aSI6ImJjNzc1ODhmNTdkZjRjNmE5ZWJiYzQ3MzVlZjc1YzdjIiwidXNlcl9pZCI6MX0.mOLSO9XWA1q57tzaAG2LyxYpnSn1TQp4S0oOcp9iyCM");

    var raw = JSON.stringify({
      "content": Comment,
      "name" : Name
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };


    fetch("http://94.183.74.154:1234/comments/api/v1/post", requestOptions)
      .then(response => response.text())
      .then(result => show())
      .catch(error => console.log('error', error));
  };

  return (
    <div class="d-flex justify-content-center col-md-12">
    <div class="col-md-12 card p-3 shadow" dir="rtl">
      {isLoading ? <div class='loadingPage'>
        <div class="spinner spinner-dark mr-15 text-center loadingCenter" ></div>
     
      <div class='contain'>
      {Comments.map(c =><div>
          <div class="mt-2 rounded p-5 border text-dark-50 font-weight-bold font-size-lg text-left max-w-1500px fontv">
              <div class="text-muted ">{c.name}:</div>
              <div class='h4'>{c.content}</div>
          </div>
        </div>
      )}</div>
      <div class="d-flex align-items-center">
      <div class=" col-md-10 rounded p-5 mb-9 d-flex align-items-center">
        <input type='text' id="1" onChange={e => setComment(e.target.value)} class="form-control form-control-solid form-control-lg col-md-2" ></input>
        <button onClick={sendToServer} class=" col-md-2 btn btn-primary font-weight-bold">ثبت</button>
      </div>
      </div>
      </div> : 
      <div>
      <div class='contain'>{Comments.map(c =>
        <div>
          <div class="mt-2 rounded p-5 border text-dark-50 font-weight-bold font-size-lg text-left max-w-1500px fontv">
              <div class="text-muted ">{c.name}:</div>
              <div class='h4'>{c.content}</div>
          </div>
        </div>
      )}</div>
        <div class="pt-4 ">
          <div class="pt-2 border-top border-dark">
            <div class='card '>
              <div class="d-flex justify-content-start ">
                <div class=" col-md-10 rounded p-3 d-flex align-items-center">
                  <input id="1" onChange={e => setName(e.target.value)} class="form-control form-control-solid form-control-lg col-md-2" placeholder="نام ونام خانوادگی:"/>
                </div>
              </div>
              <div class="d-flex justify-content-start ">
                <div class=" col-md-10 rounded p-3 d-flex align-items-center">
                  <input           
                  onKeyDown={(e) => { 
                      if (e.key === "Enter")
                        sendToServer();}}
                      id="2" onChange={e => setComment(e.target.value)} class="form-control form-control-solid form-control-lg col-md-2" placeholder="نظر شما:"/>
                </div>
              </div>
              <div class='d-flex justify-content-end p-2  '>
                 <button onClick={sendToServer} class=" col-md-4 btn btn-lg btn-primary font-weight-bold">ثبت</button>
              </div>
            </div>
          </div>
        </div>
      </div>}

    </div>
    </div>
  )

}
export default Comments;
